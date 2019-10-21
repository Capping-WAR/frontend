// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants'

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