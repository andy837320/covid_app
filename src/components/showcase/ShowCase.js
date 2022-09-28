import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CountUp from "react-countup";

const usestyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    marginBottom: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  count: {
    fontSize: "3.5rem",
  },
  countP: {
    fontSize: "1.8rem",
    color: "#326488",
  },
}));

const showCase = ({ totalData }) => {
  const classes = usestyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <p className={classes.countP}>Total Confirmed</p>
            <div className={classes.count} style={{ color: "orange" }}>
              <CountUp end={totalData.totalConfirmed} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <p className={classes.countP}>Total Recovered</p>
            <div className={classes.count} style={{ color: "green" }}>
              <CountUp end={totalData.totalRecovered} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <p className={classes.countP}>Total Deaths</p>
            <div className={classes.count} style={{ color: "red" }}>
              <CountUp end={totalData.totalDeaths} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default showCase;
