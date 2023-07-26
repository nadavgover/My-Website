import React, {useCallback, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import {makeStyles} from "@material-ui/core";

import {WIN_COLOR, TIE_COLOR, LOSS_COLOR} from "../../../constants/colors";
import {useSelector} from "react-redux";
import {FORM_KEYS} from "../../../constants/redux";

const useStyles = makeStyles((theme) => ({
    win: {
        '&$checked': {
            color: WIN_COLOR,
        }
    },
    tie: {
        '&$checked': {
            color: TIE_COLOR,
        }
    },
    loss: {
        '&$checked': {
            color: LOSS_COLOR,
        }
    },
    checked: {}
}))

const ScoreRadio = ({value, handleClick, score, gameNumber}) => {

    const classes = useStyles()
    const ratingChange = useSelector(({batch: {gameCards}}) => gameCards[gameNumber][FORM_KEYS.RATING_CHANGE])
    const totalRatingChange = useSelector(({batch: {totalRatingChange}}) => totalRatingChange)

    const handleClickLocal = useCallback(() => {
        handleClick(value, ratingChange, totalRatingChange)
    }, [value, ratingChange, totalRatingChange, gameNumber])

    return (
        <Radio
            checked={score === value}
            onClick={handleClickLocal}
            value={value}
            classes={{root: classes[value], checked: classes.checked}}
        />
    )
}

export default ScoreRadio