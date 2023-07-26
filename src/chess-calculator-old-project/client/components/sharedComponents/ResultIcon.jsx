import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import {scores} from "../../constants/rating";

const ResultIcon = ({score, list = false, color = "primary"}) => {
    const iconObj = {
        [scores.WIN.STR]: <ThumbUpIcon color={color} />,
        [scores.TIE.STR]: <ThumbsUpDownIcon color={color} />,
        [scores.LOSS.STR]: <ThumbDownIcon color={color} />
    }
    const icon = iconObj[score]
    return list ?
        <ListItemAvatar>
            <Avatar>
                {icon}
            </Avatar>
        </ListItemAvatar>
        :
        icon
}

export default ResultIcon