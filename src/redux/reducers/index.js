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
  user: {
    first: 'Daniel',
    last: 'Gisolfi',
    email: 'Daniel.Gisolfi1@marist.edu',
  },
  rules: [],
  sentence: [],
  error: null,
};

export const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    // User log-in actions
    // case ActionTypes.USER_LOGIN_REQUEST:
    //   return { ...state, isLoading: true, loggedIn: false };

    // case ActionTypes.USER_LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     loggedIn: true,
    //     user: action.payload.user,
    //   };

    // case ActionTypes.USER_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload.error || 'Could not log in',
    //   };

    // // User sign-up actions
    // case ActionTypes.USER_SIGNUP_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     loggedIn: false,
    //   };
      
    // // Log out user action
    // case ActionTypes.USER_LOG_OUT_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   }

    // case ActionTypes.USER_LOG_OUT_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     loggedIn: false,
    //     user: initialState.user,
    //     lpars: initialState.lpars,
    //   }

    // case ActionTypes.USER_LOG_OUT_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload.error || 'Could not log out',
    //   }


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
          sentence: action.payload[0]
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
          rules: action.payload
        }
      
    case ActionTypes.GET_RULES_FAILURE:
        return {
          ...state,
          isFetchingRules: false,
          error: action.payload.error || 'Could not get Rules',
        }

    default:
      return state;
  }
};
