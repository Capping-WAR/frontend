import * as ActionTypes from '../constants';

export const fetchSentenceToBeReviewed = (query) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: query
    },
    types: [
      ActionTypes.GET_SENTENCE_TO_REVIEW_REQUEST,
      ActionTypes.GET_SENTENCE_TO_REVIEW_SUCCESS,
      ActionTypes.GET_SENTENCE_TO_REVIEW_FAILURE,
    ],
  },
});

export const fetchLeaderboard = (CWID) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: `SELECT * FROM getTopReviewers(${CWID})`
    },
    types: [
      ActionTypes.GET_LEADERBOARD_REQUEST,
      ActionTypes.GET_LEADERBOARD_SUCCESS,
      ActionTypes.GET_LEADERBOARD_FAILURE,
    ],
  },
});

export const callSendToDataset = (id) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: `CALL sendToDataset(${id})`
    },
    types: [
      ActionTypes.POST_DATASET_REQUEST,
      ActionTypes.POST_DATASET_SUCCESS,
      ActionTypes.POST_DATASET_FAILURE,
    ],
  },
});