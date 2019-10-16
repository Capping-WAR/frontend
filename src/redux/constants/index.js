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


export const API_MIDDLEWARE_USERS_ENDPOINT = 'users';
export const API_MIDDLEWARE_SENTENCE_ENDPOINT = 'sentence';
export const API_MIDDLEWARE_RULES_ENDPOINT = 'rules';
export const API_MIDDLEWARE_REVIEWERS_ENDPOINT = 'reviewers';

export const GET_SENTENCE_REQUEST = 'GET_SENTENCE_REQUEST';
export const GET_SENTENCE_SUCCESS = 'GET_SENTENCE_SUCCESS';
export const GET_SENTENCE_FAILURE = 'GET_SENTENCE_FAILURE';

export const GET_RULES_REQUEST = 'GET_RULES_REQUEST';
export const GET_RULES_SUCCESS = 'GET_RULES_SUCCESS';
export const GET_RULES_FAILURE = 'GET_RULES_FAILURE';

export const GET_REVIEWERS_REQUEST = 'GET_REVIEWERS_REQUEST';
export const GET_REVIEWERS_SUCCESS = 'GET_REVIEWERS_SUCCESS';
export const GET_REVIEWERS_FAILURE = 'GET_REVIEWERS_FAILURE';

// USER SIGN UP ACTION TYPE
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

// USER LOG OUT ACTION TYPE
export const USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST';
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS';
export const USER_LOG_OUT_FAILURE = 'USER_LOG_OUT_FAILURE';


// STOP SPINNER ACTION
export const DONE_GETTING_SENTENCE = 'DONE_GETTING_SENTENCE';
export const DONE_GETTING_RULES = 'DONE_GETTING_RULES';
export const DONE_GETTING_REVIEWERS = 'DONE_GETTING_REVIEWERS';

