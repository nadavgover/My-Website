import React from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FunctionsIcon from '@material-ui/icons/Functions';
import ListItemText from "@material-ui/core/ListItemText";
import {round} from "../../services/utils.service";
import Result from "../sharedComponents/Result";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

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

const BatchResultList = () => {
    const classes = useStyles()
    const totalRatingChange = useSelector(({batch: {totalRatingChange}}) => totalRatingChange)
    const totalRatingChangeRounded = round(totalRatingChange)
    return (
        <div>
            <Typography variant="body1" className={classes.text}>Results</Typography>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FunctionsIcon color="primary" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Total Rating Change"
                                  secondary={<Result result={totalRatingChangeRounded}/>}/>
                </ListItem>
            </List>
        </div>
    )
}

export default BatchResultList