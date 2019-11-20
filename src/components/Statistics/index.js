import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import LoginData from './LoginData';
import TotalUsers from './TotalUsers';
import UsersByDevice from './UsersByDevice';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
          spacing={4}
        >
          <TotalUsers />
          <div style={{padding:"10px"}}></div>
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LoginData />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
