import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UserInfo from './userInfo';
import Rules from './rules';
import Sentence from './sentence';
import { 
  doneFetchingSentence, 
  fetchSentence, 
  fetchSentenceToBeReviewed
  } from '../../redux/actions/sentenceActions';
import { addPeopleReview } from '../../redux/actions/reviewActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRules, doneFetchingRules } from '../../redux/actions/ruleActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Reviewer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    new Promise((resolve, reject) => {
      dispatch(fetchRules());
      resolve();
    })
    .then(() => {
        dispatch(doneFetchingRules());
        new Promise((resolve, reject) => {
          dispatch(fetchSentenceToBeReviewed());
          resolve();
        })
        .then(() => {
            dispatch(doneFetchingSentence());
        })
        .catch((err) => {
            console.log(err)
            // handle error
            dispatch(doneFetchingSentence());
        });
    })
    .catch((err) => {
        dispatch(doneFetchingRules());
    });
  }, []);

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