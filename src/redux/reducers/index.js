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
  isFetchingLPARs: true,
  user: {
    first: '',
    last: '',
    email: '',
    lpars: [],
  },
  lpars: {},
  error: null,
};

export const baseReducer = (state = initialState, action) => {
  console.log(action.type, state);
  switch (action.type) {
    // User log-in actions
    case ActionTypes.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, loggedIn: false };

    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        user: action.payload.user,
      };

    case ActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error || 'Could not log in',
      };

    // User sign-up actions
    case ActionTypes.USER_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        loggedIn: false,
      };
      
    // Log out user action
    case ActionTypes.USER_LOG_OUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case ActionTypes.USER_LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedIn: false,
        user: initialState.user,
        lpars: initialState.lpars,
      }

    case ActionTypes.USER_LOG_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error || 'Could not log out',
      }

    default:
      return state;
  }
};
