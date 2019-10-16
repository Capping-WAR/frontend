/**
 * @module src/redux/actions/index.js
 * @fileoverview The main `Redux` actions module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import * as ActionTypes from '../constants';
import store from '../store';


export const fetchSentenceToBeReviewed = () =>  (dispatch, getState, subscribe) => {
  // Get the Sentence ID of the sentence to be reviewed
    return new Promise((resolve, reject) => {
      const { user } = getState(); 
      dispatch(fetchSearch(
        `SELECT * FROM SentenceToBeReviewed(${user.id});`
      ));
      resolve();
    })
    .then(() => {
      const unsubscribe = store.subscribe(() => {
        const { user, isFetchingSearch, SearchResults } = getState();
        if (isFetchingSearch) {
          console.log('FETCHING')
        } else {
          unsubscribe()
          console.log(SearchResults.sentencetobereviewed[0][0])
          // dispatch(SearchResults[`sentencetobereviewed(${user.id})`])
          dispatch(fetchSentence(SearchResults.sentencetobereviewed[0][0]))
          
        }
      });
    })
    .catch((err) => {
      console.log(err)
      // handle error
    });
};

export const fetchSentence = (sentenceID) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SENTENCE_ENDPOINT,
    endpoint: `/${sentenceID}`,
    method: 'GET',
    types: [
      ActionTypes.GET_SENTENCE_REQUEST,
      ActionTypes.GET_SENTENCE_SUCCESS,
      ActionTypes.GET_SENTENCE_FAILURE,
    ],
  },
});

export const doneFetchingSentence = () => (
  {
    type: ActionTypes.DONE_GETTING_SENTENCE,
  }
);

export const fetchRules = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_RULES_ENDPOINT,
    endpoint: '',
    method: 'GET',
    types: [
      ActionTypes.GET_RULES_REQUEST,
      ActionTypes.GET_RULES_SUCCESS,
      ActionTypes.GET_RULES_FAILURE,
    ],
  },
});

export const doneFetchingRules = () => (
  {
    type: ActionTypes.DONE_GETTING_RULES,
  }
);

export const submitReview = (review) => (dispatch, getState, subscribe) => {
  if (review.ruleReviewID === undefined) {

    return new Promise((resolve, reject) => {
      dispatch(fetchRuleReviewID(review.sentenceID));
      resolve();
    })
    .then(() => {
      const unsubscribe = store.subscribe(() => {
        const { isFetchingRuleReview, ruleReviewID } = getState();
        if (isFetchingRuleReview) {
          // console.log('FETCHING')
        } else {
          // console.log('DONE', getState())
          unsubscribe()
          dispatch(doneFetchingRuleReviewID())
          dispatch(addPeopleReview({
            ...review,
            ruleReviewID: ruleReviewID
          }));
          dispatch(fetchSentenceToBeReviewed());
        }
      })
    })
    .catch((err) => {
        console.log(err)
        // handle error
        dispatch(doneFetchingRuleReviewID())
    });
  }
};

export const fetchRuleReviewID = (sentenceID) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SENTENCE_RULES_ENDPOINT,
    endpoint: `/${sentenceID}`,
    method: 'GET',
    types: [
      ActionTypes.GET_RULE_REVIEW_REQUEST,
      ActionTypes.GET_RULE_REVIEW_SUCCESS,
      ActionTypes.GET_RULE_REVIEW_FAILURE,
    ],
  },
});

export const doneFetchingRuleReviewID = () => (
  {
    type: ActionTypes.DONE_GETTING_RULE_REVIEW,
  }
);

export const addPeopleReview = (review) => ({
    type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_PEOPLE_REVIEWS_ENDPOINT,
      endpoint: '',
      method: 'POST',
      content: {
        sentenceID: review.sentenceID,
        reviewerID: review.reviewerID,
        ruleReviewID: review.ruleReviewID,
        ruleReview: review.ruleReview,
        dateAdded: "now()"
      },
      types: [
        ActionTypes.POST_REVIEW_REQUEST,
        ActionTypes.POST_REVIEW_SUCCESS,
        ActionTypes.POST_REVIEW_FAILURE,
      ],
    },
  }
);

export const fetchSearch = (query) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: query
    },
    types: [
      ActionTypes.GET_SEARCH_REQUEST,
      ActionTypes.GET_SEARCH_SUCCESS,
      ActionTypes.GET_SEARCH_FAILURE,
    ],
  },
});



