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
import { fetchSearch } from '../../redux/actions/utilActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRules, doneFetchingRules } from '../../redux/actions/ruleActions';
import { fetchReviewer, doneFetchingReviewer} from '../../redux/actions/reviewerActions';
import store from '../../redux/store'
import { getState } from 'expect/build/jestMatchersObject';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Reviewer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { user } = state.userReducer; 

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
          //   new Promise((resolve, reject) => {
          //     console.log(user)
          //     dispatch(
          //       fetchReviewer(user.id)
          //     );
          //     const unsubscribe = store.subscribe(() => {
          //       const state = getState();
          //       const { isFetchingReviewer, reviewer } = state.reviewerReducer;
          //       if (isFetchingReviewer !== undefined) {
          //         if (!isFetchingReviewer) {
          //           if (reviewer != undefined){
          //             unsubscribe()
          //             console.log(state)
          //           }
                  
          //         }
  
          //         resolve();

          //       }
                
          //     })
          //   })
          //   .then(() => {
          //     dispatch(doneFetchingReviewer());
          //     console.log(state)
          //   })
          //   .catch((err) => {
          //     console.log(err)
          //     // handle error
          // });
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