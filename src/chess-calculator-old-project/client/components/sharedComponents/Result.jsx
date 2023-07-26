import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {WIN_COLOR, LOSS_COLOR, TIE_COLOR} from "../../constants/colors";
import {scores} from "../../constants/rating";

const useStyles = makeStyles((theme) => ({
    win: {
        color: WIN_COLOR
    },
    loss: {
        color: LOSS_COLOR
    },
    tie: {
        color: TIE_COLOR
    }
}))



const Result = ({result}) => {
    const classes = useStyles()
    const resultClassName = result >= 0
        ?
        result > 0 ?
            scores.WIN.STR
            :
            scores.TIE.STR
        :
        scores.LOSS.STR
    const resultWithSign = result >= 0 ? `+${result}` : result
    return(
        <span className={classes[resultClassName]}>
            {resultWithSign}
        </span>
    )
}

export default Result