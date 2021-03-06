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
  fetchSentenceForReview,
  } from '../../redux/actions/sentenceActions';
import { fetchSearch } from '../../redux/actions/utilActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRules, doneFetchingRules } from '../../redux/actions/ruleActions';
import { fetchReviewer, doneFetchingReviewer} from '../../redux/actions/reviewerActions';
import { fetchLeaderboard } from '../../redux/actions/utilActions';
import store from '../../redux/store'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Reviewer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { reviewer } = state.reviewerReducer;


  useEffect(() => {
    new Promise((resolve, reject) => {
      dispatch(fetchRules());
      resolve();
    })
    .then(() => {
        dispatch(doneFetchingRules());
        new Promise((resolve, reject) => {
          dispatch(fetchSentenceForReview());
          resolve();
          new Promise((resolve, reject) => {
              dispatch(fetchLeaderboard(reviewer.id));
              resolve();
          }).then(() => {
            //   
          })
          .catch(err => {
            console.log(err);
            // dispatch();
          });
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
        console.log(err)
    });
  }, []);

  return (
    // <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} lg={4}>
          <UserInfo/>
        </Grid>
        <Grid container lg={8}>
          <Sentence />
          <Rules/>
        </Grid>
      </Grid>
  // </div>
  );
}

export default Reviewer;