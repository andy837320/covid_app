import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: "2.3rem",
  },
}));

const NavBar = ({ getIndiaCases, getGlobalData, india }) => {
  const classes = usestyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Avatar />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Covid Tracker Application
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "green", color: "white" }}
          onClick={india ? getIndiaCases : getGlobalData}
        >
          {!india ? "India" : "Global"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
