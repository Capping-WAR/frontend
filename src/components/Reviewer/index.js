import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserInfo from './userInfo';
import Rules from './rules';
import Sentence from './sentence';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Reviewer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <UserInfo/>
      <Grid item xs={6}>
        <Sentence />
      </Grid>
      <Rules/>
    </Grid>
  </div>
  );
}

export default Reviewer;