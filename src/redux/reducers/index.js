/**
 * @module src/components/redux/reducers.index.js
 * @fileoverview The main `Redux` reducer module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import merge from 'lodash/merge';
import * as ActionTypes from '../constants';

export const initialState = {
  isLoading: false,
  loggedIn: false,
  isFetchingSentence: false,
  isFetchingRules: false,
  user: {
    first: 'Daniel',
    last: 'Gisolfi',
    email: 'Daniel.Gisolfi1@marist.edu',
    id: 20074558
  },
  ruleReviewID: undefined,
  rules: undefined,
  sentence: undefined,
  // review: undefined,
  error: null,
};

export const baseReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.GET_SENTENCE_REQUEST:
      return {
        ...state,
        isFetchingSentence: true,
      }
    case ActionTypes.DONE_GETTING_SENTENCE:
      return {
        ...state,
        isFetchingSentence: false,
      };
    
    case ActionTypes.GET_SENTENCE_SUCCESS:
      return {
        ...state,
        isFetchingSentence: false,
        sentence: {
          id: action.payload.Sentence[0][0],
          text: action.payload.Sentence[0][2],
        }
      }
      
    case ActionTypes.GET_SENTENCE_FAILURE:
      return {
        ...state,
        isFetchingSentence: false,
        error: action.payload.error || 'Could not get Sentences',
      }
    
    case ActionTypes.GET_RULES_REQUEST:
      return {
        ...state,
        isFetchingRules: true,
      }

    case ActionTypes.DONE_GETTING_RULES:
      return {
        ...state,
        isFetchingRules: false,
      }
      
    case ActionTypes.GET_RULES_SUCCESS:
      return {
        ...state,
        isFetchingRules: false,
        rules: action.payload.Rules
      }
      
    case ActionTypes.GET_RULES_FAILURE:
      return {
        ...state,
        isFetchingRules: false,
        error: action.payload.error || 'Could not get Rules',
      }
      
    
    case ActionTypes.GET_RULE_REVIEW_REQUEST:
      return {
        ...state,
        isFetchingRuleReview: true
      }

    case ActionTypes.DONE_GETTING_RULE_REVIEW:
      return {
        ...state,
        isFetchingRuleReview: false
      }

    case ActionTypes.GET_RULE_REVIEW_SUCCESS:
      return {
        ...state,
        ruleReviewID: action.payload.SentenceRule[0][1],
        isFetchingRuleReview: false
      }

    case ActionTypes.GET_RULE_REVIEW_FAILURE:
      return {
        ...state,
        isFetchingRuleReview: false,
        error: action.payload.error || 'Could not get Rule Review',
      }

    case ActionTypes.POST_REVIEW_REQUEST:
      return {
        ...state,
      }

    case ActionTypes.POST_REVIEW_SUCCESS:
      return {
        ...state,
      }

    case ActionTypes.POST_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload.error || 'Could not post Review',
      }

    case ActionTypes.GET_SEARCH_REQUEST:
      return {
        ...state,
        isFetchingSearch: true
      }
  
    case ActionTypes.GET_SEARCH_SUCCESS:
      return {
        ...state,
        isFetchingSearch: false,
        SearchResults: action.payload
      }

    case ActionTypes.GET_SEARCH_FAILURE:
      console.log( action.payload.error )
      return {
        ...state,
        isFetchingSearch: false,
        error: action.payload.error || 'Could not get Search Results',
      }

    default:
      return state;
  }
};