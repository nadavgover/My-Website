import React, {useCallback, Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import ScoreRadioGroup from "./scoreRadioGroup/ScoreRadioGroup";
import {ERROR_MSG, INPUTS} from "../../constants/inputs";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {FORM_KEYS} from "../../constants/redux";
import {removeGame, setGameData, setTotalRatingChange} from "../../redux/batch/batch.actions";
import {isRatingValid} from "../../services/validation.service";
import ResultIcon from "../sharedComponents/ResultIcon";
import Result from "../sharedComponents/Result";
import {capitalizeFirstLetter, round} from "../../services/utils.service";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        margin: theme.spacing(),
        position: "relative"
    },
    title: {
        fontSize: 14,
    },
    clearButton: {
        position: "absolute",
        right: theme.spacing(0.5),
        top: theme.spacing(0.5),
    },
    icon: {
        width: 15,
        height: 15
    },
    listItem: {
        paddingLeft: 0,
        paddingBottom: 0
    }
}));

const GameCard = ({gameNumber}) => {
    const classes = useStyles();
    const opponentRating = useSelector(({batch: {gameCards}}) => gameCards[gameNumber][FORM_KEYS.OPPONENT_RATING])
    const opponentRatingValid = useSelector(({batch: {gameCards}}) => gameCards[gameNumber][FORM_KEYS.OPPONENT_RATING_VALID])
    const ratingChange = useSelector(({batch: {gameCards}}) => gameCards[gameNumber].ratingChange)
    const totalRatingChange = useSelector(({batch: {totalRatingChange}}) => totalRatingChange)
    const score = useSelector(({batch: {gameCards}}) => gameCards[gameNumber].score)

    const dispatch = useDispatch()
    const handleOpponentRatingChange = useCallback(e => {
        if(ratingChange){
            dispatch(setGameData({
                gameNumber: gameNumber,
                key: FORM_KEYS.RATING_CHANGE,
                value: NaN
            }))
        }
        if(totalRatingChange){
            dispatch(setTotalRatingChange(NaN))
        }
        dispatch(setGameData({
            gameNumber: gameNumber,
            key: FORM_KEYS.OPPONENT_RATING,
            value: e.target.value
        }))
    }, [gameNumber, ratingChange, totalRatingChange])

    const focusOutHandler = useCallback(() => {
        dispatch(setGameData({
            gameNumber: gameNumber,
            key: FORM_KEYS.OPPONENT_RATING_VALID,
            value: isRatingValid(opponentRating.trim())
        }))
    }, [gameNumber, opponentRating])

    const handleRemove = useCallback(() => {
        dispatch(setTotalRatingChange(NaN))
        dispatch(removeGame({gameNumber: gameNumber}))
    }, [gameNumber])

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`Game ${gameNumber + 1}`}
                </Typography>
                <IconButton size="small"
                            aria-label="clear card"
                            component="span"
                            className={classes.clearButton}
                            onClick={handleRemove}
                >
                    <ClearIcon className={classes.icon}/>
                </IconButton>
                <ScoreRadioGroup gameNumber={gameNumber}/>
                <TextField label={INPUTS.OPPONENT_RATING}
                           value={opponentRating}
                           onChange={handleOpponentRatingChange}
                           onBlur={focusOutHandler}
                           color="primary"
                           error={!opponentRatingValid}
                           helperText={!opponentRatingValid && ERROR_MSG.RATING}
                />
                {(!!ratingChange || ratingChange === 0) &&
                <List >
                    <ListItem className={classes.listItem}>
                        <ResultIcon score={score} list/>
                        <ListItemText primary={capitalizeFirstLetter(score)}
                                      secondary={<Result result={round(ratingChange)}/>}/>
                    </ListItem>
                </List>
                }
            </CardContent>
        </Card>
    );
}

export default GameCard