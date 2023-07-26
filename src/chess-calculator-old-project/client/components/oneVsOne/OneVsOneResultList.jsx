import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import {scores} from "../../constants/rating";
import {round, capitalizeFirstLetter} from "../../services/utils.service";
import {shallowEqual, useSelector} from "react-redux";
import Result from "../sharedComponents/Result";
import ResultIcon from "../sharedComponents/ResultIcon";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    text: {
        textAlign: "center"
    }
}));

const OneVsOneResultList = () => {
    const classes = useStyles();
    const ratingChange = useSelector(({oneVsOne: {ratingChange}}) => ratingChange, shallowEqual)
    const [winResultRounded, tieResultRounded, lossResultRounded] = [ratingChange[scores.WIN.STR], ratingChange[scores.TIE.STR], ratingChange[scores.LOSS.STR]].map(rating => round(rating))

    return (
        <div>
            <Typography variant="body1" className={classes.text}>Rating Change</Typography>
            <List className={classes.root}>
                <ListItem>
                    <ResultIcon score={scores.WIN.STR} list/>
                    <ListItemText primary={capitalizeFirstLetter(scores.WIN.STR)}
                                  secondary={<Result result={winResultRounded}/>}/>
                </ListItem>
                <ListItem>
                    <ResultIcon score={scores.TIE.STR} list/>
                    <ListItemText primary={capitalizeFirstLetter(scores.TIE.STR)}
                                  secondary={<Result result={tieResultRounded}/>}/>
                </ListItem>
                <ListItem>
                    <ResultIcon score={scores.LOSS.STR} list/>
                    <ListItemText primary={capitalizeFirstLetter(scores.LOSS.STR)}
                                  secondary={<Result result={lossResultRounded}/>}/>
                </ListItem>
            </List>
        </div>
    );
}

export default OneVsOneResultList