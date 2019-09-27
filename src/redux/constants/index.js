/**
 * @module src/redux/constants/index.js
 * @fileoverview The main `Redux` action types module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

// API INVOCATION ACTION TYPE
// (Specifically used to trigger the API middleware action.)
export const API_MIDDLEWARE_INVOKE = 'API_MIDDLEWARE_INVOKE';

export const API_MIDDLEWARE_REVIEWER_ENDPOINT = 'reviewer';
export const API_MIDDLEWARE_REVIEW_ENDPOINT = 'review';
export const API_MIDDLEWARE_SENTENCE_ENDPOINT = 'sentence';
export const API_MIDDLEWARE_DATASET_ENDPOINT = 'dataset';
export const API_MIDDLEWARE_VERSION_ENDPOINT = 'version';

// USER LOG IN ACTION TYPE
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// USER SIGN UP ACTION TYPE
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

// USER LOG OUT ACTION TYPE
export const USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST';
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS';
export const USER_LOG_OUT_FAILURE = 'USER_LOG_OUT_FAILURE';

