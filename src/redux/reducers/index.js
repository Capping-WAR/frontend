/**
 * @module src/components/redux/reducers.index.js
 * @fileoverview The main `Redux` reducer module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import merge from 'lodash/merge';
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../constants';

export const initialState = {
  isLoading: false,
  loggedIn: false,
  isFetchingSentence: false,
  isFetchingRules: false,
  isFetchingReviewers: false,
  user: {
    first: 'Daniel',
    last: 'Gisolfi',
    email: 'Daniel.Gisolfi1@marist.edu',
  },
  rules: [],
  reviewers: [],
  sentence: [],
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
          sentence: action.payload.Sentence
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

    case ActionTypes.GET_REVIEWERS_REQUEST:
        return {
          ...state,
          isFetchingRules: true,
        }

    case ActionTypes.DONE_GETTING_REVIEWERS:
      return {
        ...state,
        isFetchingRules: false,
      }

    case ActionTypes.GET_REVIEWERS_SUCCESS:
        return {
          ...state,
          isFetchingRules: false,
          rules: action.payload.Rules
        }

    case ActionTypes.GET_REVIEWERS_FAILURE:
        return {
          ...state,
          isFetchingRules: false,
          error: action.payload.error || 'Could not get Reviewers',
        }

    default:
      return state;
  }
};