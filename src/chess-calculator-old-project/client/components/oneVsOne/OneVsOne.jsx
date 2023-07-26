import React, {Fragment, useCallback, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {INPUTS, ERROR_MSG} from "../../constants/inputs";
import {FORM_KEYS} from "../../constants/redux";
import {setOneVsOneFormData, setRatingChange} from '../../redux/oneVsOne/oneVsOne.actions'
import {isRatingValid, isTimeControlValid} from "../../services/validation.service";
import {calculateRatingChange} from "../../services/rating.service";
import {scores} from "../../constants/rating";
import OneVsOneResultList from "./OneVsOneResultList";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(),
            width: '25ch',
            display: "block",
        },
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    text: {
        textAlign: "center",
        marginTop: theme.spacing()
    },
    button: {
        margin: theme.spacing(),
        width: '25ch',
        display: "block",
    }
}));


const OneVsOne = () => {
    const classes = useStyles();
    const formValues = useSelector(({oneVsOne: {form}}) => form, shallowEqual)
    const isRatingChangeEmpty = useSelector(({oneVsOne: {ratingChange}}) => Object.keys(ratingChange).length === 0)
    const dispatch = useDispatch()

    const commonHandler = useCallback((isRatingChangeEmpty, formKey, e) => {
        if(!isRatingChangeEmpty){
            dispatch(setRatingChange({}))
        }
        dispatch(setOneVsOneFormData({
            key: formKey,
            value: e.target.value
        }))
    }, [])

    const handleMyRatingChange = useCallback(e => {
        commonHandler(isRatingChangeEmpty, FORM_KEYS.MY_RATING, e)
    }, [isRatingChangeEmpty])

    const handleOpponentRatingChange = useCallback(e => {
        commonHandler(isRatingChangeEmpty, FORM_KEYS.OPPONENT_RATING, e)
    }, [isRatingChangeEmpty])

    const handleTimeControlChange = useCallback(e => {
        commonHandler(isRatingChangeEmpty, FORM_KEYS.TIME_CONTROL, e)
    }, [isRatingChangeEmpty])

    const handleSubmit = useCallback(() => {
        const myRating = formValues[FORM_KEYS.MY_RATING].trim()
        const opponentRating = formValues[FORM_KEYS.OPPONENT_RATING].trim()
        const timeControl = formValues[FORM_KEYS.TIME_CONTROL].trim()
        const isValidMyRating = isRatingValid(myRating)
        const isValidOpponentRating = isRatingValid(opponentRating)
        const isValidTimeControl = isTimeControlValid(timeControl)
        dispatch(setOneVsOneFormData({
            key: FORM_KEYS.MY_RATING_VALID,
            value: isValidMyRating
        }))
        dispatch(setOneVsOneFormData({
            key: FORM_KEYS.OPPONENT_RATING_VALID,
            value: isValidOpponentRating
        }))
        dispatch(setOneVsOneFormData({
            key: FORM_KEYS.TIME_CONTROL_VALID,
            value: isValidTimeControl
        }))
        if (isValidMyRating && isValidOpponentRating && isValidTimeControl) {
            const [winRatingChange, tieRatingChange, lossRatingChange] = [scores.WIN.STR, scores.TIE.STR, scores.LOSS.STR].map(score => {
                return calculateRatingChange(myRating, opponentRating, timeControl, score)
            })
            dispatch(setRatingChange({
                [scores.WIN.STR]: winRatingChange,
                [scores.TIE.STR]: tieRatingChange,
                [scores.LOSS.STR]: lossRatingChange
            }))

        }
    }, [formValues])

    return (
        <div>
            <Typography variant="body1" className={classes.text}>One Vs One Calculator</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField label={INPUTS.MY_RATING}
                           value={formValues[FORM_KEYS.MY_RATING]}
                           onChange={handleMyRatingChange}
                           color="primary"
                           error={!formValues[FORM_KEYS.MY_RATING_VALID]}
                           helperText={!formValues[FORM_KEYS.MY_RATING_VALID] && ERROR_MSG.RATING}
                />
                <TextField label={INPUTS.OPPONENT_RATING}
                           value={formValues[FORM_KEYS.OPPONENT_RATING]}
                           onChange={handleOpponentRatingChange}
                           color="primary"
                           error={!formValues[FORM_KEYS.OPPONENT_RATING_VALID]}
                           helperText={!formValues[FORM_KEYS.OPPONENT_RATING_VALID] && ERROR_MSG.RATING}
                />
                <TextField label={INPUTS.TIME_CONTROL}
                           value={formValues[FORM_KEYS.TIME_CONTROL]}
                           onChange={handleTimeControlChange}
                           color="primary"
                           placeholder={INPUTS.TIME_CONTROL_PLACEHOLDER}
                           error={!formValues[FORM_KEYS.TIME_CONTROL_VALID]}
                           helperText={!formValues[FORM_KEYS.TIME_CONTROL_VALID] && ERROR_MSG.TIME_CONTROL}
                />
            </form>
            <Button variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
            >
                {INPUTS.SUBMIT}
            </Button>
            {!isRatingChangeEmpty &&
            <Fragment>
                <Divider variant="middle" className={classes.divider}/>
                <OneVsOneResultList />
            </Fragment>
            }
        </div>
    )
}

export default OneVsOne