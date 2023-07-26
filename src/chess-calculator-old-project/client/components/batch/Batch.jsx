import React, {Fragment, useCallback} from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {ERROR_MSG, INPUTS} from "../../constants/inputs";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import GameCard from "./GameCard";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {FORM_KEYS} from "../../constants/redux";
import {
    setBatchFormData,
    resetAllRatingChanges,
    addGame,
    setGameData,
    setTotalRatingChange
} from "../../redux/batch/batch.actions";
import {isRatingValid, isTimeControlValid} from "../../services/validation.service";
import BatchResultList from "./BatchResultList";
import Divider from "@material-ui/core/Divider";
import {calculateRatingChange} from "../../services/rating.service";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(),
            width: '25ch',
            display: "block",
        },
    },
    text: {
        textAlign: "center",
        marginTop: theme.spacing()
    },
    addButton: {
        margin: theme.spacing(),
        width: 250,
    },
    submitButton: {
        margin: theme.spacing(),
        width: 250,
        display: "block"
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

const Batch = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const formValues = useSelector(({batch: {form}}) => form, shallowEqual)
    const totalRatingChange = useSelector(({batch: {totalRatingChange}}) => totalRatingChange)
    const gameCardsList = useSelector(({batch: {gameCards}}) => gameCards, shallowEqual)

    const gameCardsComponents = gameCardsList.map((card, i) => <GameCard gameNumber={i} key={card.reactKey}/>);

    const commonChangeHandlerHandler = useCallback((totalRatingChange, formKey, e) => {
        if(totalRatingChange){
            dispatch(resetAllRatingChanges())
        }
        dispatch(setBatchFormData({
            key: formKey,
            value: e.target.value
        }))
    }, [])

    const commonFocusOutHandler = useCallback((validationFn, stateKey, stateKeyValid) => {
        const value = formValues[stateKey].trim()
        dispatch(setBatchFormData({
            key: stateKeyValid,
            value: validationFn(value)
        }))
    }, [formValues])

    const handleMyRatingFocusOut = useCallback(e => {
        commonFocusOutHandler(isRatingValid, FORM_KEYS.MY_RATING, FORM_KEYS.MY_RATING_VALID)
    }, [formValues])

    const handleMyRatingChange = useCallback(e => {
        commonChangeHandlerHandler(totalRatingChange, FORM_KEYS.MY_RATING, e)
    }, [totalRatingChange, formValues])

    const handleTimeControlFocusOut = useCallback(e => {
        commonFocusOutHandler(isTimeControlValid, FORM_KEYS.TIME_CONTROL, FORM_KEYS.TIME_CONTROL_VALID)
    }, [formValues])


    const handleTimeControlChange = useCallback(e => {
        commonChangeHandlerHandler(totalRatingChange, FORM_KEYS.TIME_CONTROL, e)
    }, [totalRatingChange])

    const allInputsAreValid = () => {
        const myRatingValid = formValues[FORM_KEYS.MY_RATING_VALID] && !!formValues[FORM_KEYS.MY_RATING]
        const timeControlValid = formValues[FORM_KEYS.TIME_CONTROL_VALID]  && !!formValues[FORM_KEYS.TIME_CONTROL]
        const allOpponentRatingsValid = gameCardsList.reduce((totalValid, card) => {
            return totalValid && card[FORM_KEYS.OPPONENT_RATING_VALID] && !!card[FORM_KEYS.OPPONENT_RATING]
        }, true)
        return myRatingValid && timeControlValid && allOpponentRatingsValid
    }

    const handleSubmit = useCallback(() => {
        const myRating = formValues[FORM_KEYS.MY_RATING].trim()
        const timeControl = formValues[FORM_KEYS.TIME_CONTROL].trim()
        if(allInputsAreValid()) {
            const allRatingChanges = gameCardsList.map((card, i) => {
                const opponentRating = card[FORM_KEYS.OPPONENT_RATING].trim()
                const score = card.score
                const ratingChange = calculateRatingChange(myRating, opponentRating, timeControl, score)
                dispatch(setGameData({
                    gameNumber: i,
                    key: FORM_KEYS.RATING_CHANGE,
                    value: ratingChange
                }))
                return ratingChange
            })
            const totalRatingChangeCalculated = allRatingChanges.reduce((acc, ratingChange) => {
                return acc + ratingChange
            }, 0)
            dispatch(setTotalRatingChange(totalRatingChangeCalculated))
        }
    }, [gameCardsList, formValues])

    const handleAddCard = useCallback(() => {
        dispatch(addGame())
        dispatch(setTotalRatingChange(NaN))
    }, [])

    return (
        <div>
            <Typography variant="body1" className={classes.text}>Batch Calculator</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField label={INPUTS.MY_RATING}
                           value={formValues[FORM_KEYS.MY_RATING]}
                           onChange={handleMyRatingChange}
                           onBlur={handleMyRatingFocusOut}
                           color="primary"
                           error={!formValues[FORM_KEYS.MY_RATING_VALID]}
                           helperText={!formValues[FORM_KEYS.MY_RATING_VALID] && ERROR_MSG.RATING}
                />
                <TextField label={INPUTS.TIME_CONTROL}
                           value={formValues[FORM_KEYS.TIME_CONTROL]}
                           onChange={handleTimeControlChange}
                           onBlur={handleTimeControlFocusOut}
                           color="primary"
                           placeholder={INPUTS.TIME_CONTROL_PLACEHOLDER}
                           error={!formValues[FORM_KEYS.TIME_CONTROL_VALID]}
                           helperText={!formValues[FORM_KEYS.TIME_CONTROL_VALID] && ERROR_MSG.TIME_CONTROL}
                />
            </form>
            {gameCardsComponents}
            <Button variant="outlined"
                    color="primary"
                    onClick={handleAddCard}
                    className={classes.addButton}
                    startIcon={<AddIcon />}
            >
                {INPUTS.ADD}
            </Button>
            <Button variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.submitButton}
            >
                {INPUTS.SUBMIT}
            </Button>
            {(!!totalRatingChange || totalRatingChange === 0) &&
            <Fragment>
                <Divider variant="middle" className={classes.divider}/>
                <BatchResultList />
            </Fragment>
            }
        </div>
    )
}

export default Batch