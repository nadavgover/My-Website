import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {routes} from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: "black"
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = !!anchorEl;

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link to={routes.ONE_VS_ONE} className={classes.link}>
                            <MenuItem onClick={handleClose}>1 vs 1</MenuItem>
                        </Link>
                        <Link to={routes.BATCH} className={classes.link}>
                            <MenuItem onClick={handleClose}>Batch</MenuItem>
                        </Link>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        Chess Rating Calculator
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar