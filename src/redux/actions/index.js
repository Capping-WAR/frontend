/**
 * @module src/redux/actions/index.js
 * @fileoverview The main `Redux` actions module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import * as ActionTypes from '../constants';

export const logUserIn = (userInfo) => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_USERS_ENDPOINT,
    endpoint: '/login',
    method: 'POST',
    content: userInfo,
    types: [
      ActionTypes.USER_LOGIN_REQUEST,
      ActionTypes.USER_LOGIN_SUCCESS,
      ActionTypes.USER_LOGIN_FAILURE,
    ],
  },
});

export const logUserOut = (email) => (dispatch, getState) => {
  const { loggedIn } = getState();

  if (!loggedIn) {
    return null;
  }

  return {
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_USERS_ENDPOINT,
      endpoint: '/logout',
      method: 'POST',
      content: JSON.stringify({ email }),
      types: [
        ActionTypes.USER_LOG_OUT_REQUEST,
        ActionTypes.USER_LOG_OUT_SUCCESS,
        ActionTypes.USER_LOG_OUT_FAILURE,
      ],
    },
  };
};