import React, {useCallback} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ScoreRadio from "./ScoreRadio";
import {makeStyles} from "@material-ui/core";

import {scores} from "../../../constants/rating";
import {capitalizeFirstLetter} from "../../../services/utils.service";
import {useDispatch, useSelector} from "react-redux";
import {setGameData, setTotalRatingChange} from "../../../redux/batch/batch.actions";
import {FORM_KEYS} from "../../../constants/redux";

const useStyles = makeStyles({
    firstRadio: {
        marginLeft: 0
    }
})

const ScoreRadioGroup = ({gameNumber}) => {
    const classes = useStyles()
    const score = useSelector(({batch: {gameCards}}) => gameCards[gameNumber].score)
    const dispatch = useDispatch()

    const handleClick = useCallback((value, ratingChange, totalRatingChange) => {
        if (ratingChange && score !== value){
            dispatch(setGameData({
                gameNumber: gameNumber,
                key: FORM_KEYS.RATING_CHANGE,
                value: NaN
            }))
        }
        if(totalRatingChange && score !== value){
            dispatch(setTotalRatingChange(NaN))
        }
        dispatch(setGameData({
            gameNumber: gameNumber,
            key: "score",
            value: value
        }))
    }, [score, gameNumber])

    return (
        <div>
            <FormControlLabel
                control={<ScoreRadio value={scores.WIN.STR} score={score} handleClick={handleClick} gameNumber={gameNumber}/>}
                label={capitalizeFirstLetter(scores.WIN.STR)}
                labelPlacement="top"
                className={classes.firstRadio}
            />
            <FormControlLabel
                control={<ScoreRadio value={scores.TIE.STR} score={score} handleClick={handleClick} gameNumber={gameNumber}/>}
                label={capitalizeFirstLetter(scores.TIE.STR)}
                labelPlacement="top"
            />
            <FormControlLabel
                control={<ScoreRadio value={scores.LOSS.STR} score={score} handleClick={handleClick} gameNumber={gameNumber}/>}
                label={capitalizeFirstLetter(scores.LOSS.STR)}
                labelPlacement="top"
            />
        </div>
    );
}

export default ScoreRadioGroup