/**
 * 
 */

import 'whatwg-fetch';
import * as ActionTypes from '../constants';

const SERVER_API_URL = 'https://war.marist.ai';

const SERVER_API_ENDPOINT_BASE = '/api/war/v1';
const SERVER_API_USER_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/users`;
const SERVER_API_SENTENCE_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/sentence`;
const SERVER_API_RULE_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/rules`;
const SERVER_API_PEOPLE_REVIEWS_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/review`;
const SERVER_API_SENTENCE_RULES_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/sentenceRule`;
const SERVER_API_SEARCH_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/search`;
const SERVER_API_REVIEWER_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/reviewer`;
const SERVER_API_STATISTICS_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/statistics`;
const SERVER_API_RETRAIN_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/retrain`;
const SERVER_API_THREAD_ACTIONS = `${SERVER_API_ENDPOINT_BASE}/threads`;



const middleware = store => next => action => {
  // Determine if the API hook was passed in so we can trigger API processing.
  const apiInvocationHook = action[ActionTypes.API_MIDDLEWARE_INVOKE];

  if (typeof apiInvocationHook === 'undefined') {
    return next(action);
  }

  if (action.type) {
    delete action.type;
  }

  const { route, endpoint, method, content, types } = apiInvocationHook;
  const [ requestType, successType, failureType ] = types;

  let cleanedRoute = '';

  switch (route) {
    case ActionTypes.API_MIDDLEWARE_USERS_ENDPOINT:
      cleanedRoute = SERVER_API_USER_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_SENTENCE_ENDPOINT:
      cleanedRoute = SERVER_API_SENTENCE_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_RULES_ENDPOINT:
      cleanedRoute = SERVER_API_RULE_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_PEOPLE_REVIEWS_ENDPOINT:
      cleanedRoute = SERVER_API_PEOPLE_REVIEWS_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_SENTENCE_RULES_ENDPOINT:
      cleanedRoute = SERVER_API_SENTENCE_RULES_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT:
      cleanedRoute = SERVER_API_SEARCH_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_REVIEWER_ENDPOINT:
      cleanedRoute = SERVER_API_REVIEWER_ACTIONS;
      break;
    case ActionTypes.API_MIDDLEWARE_RETRAIN_ENDPOINT:
        cleanedRoute = SERVER_API_RETRAIN_ACTIONS;
        break;
    case ActionTypes.API_MIDDLEWARE_STATISTICS_ENDPOINT:
        cleanedRoute = SERVER_API_STATISTICS_ACTIONS;
        break;
    case ActionTypes.API_MIDDLEWARE_THREADS_ENDPOINT:
        cleanedRoute = SERVER_API_THREAD_ACTIONS;
        break;
  }

  const cleanedEndpoint = cleanedRoute + endpoint;

  // Remove proxy header information and forward action to next stage properly.
  const actionWith = (data) => {
    const finalAction = { ...action, ...data };
    delete finalAction[ActionTypes.API_MIDDLEWARE_INVOKE];
    return finalAction;
  };

  next({
    type: requestType,
  })

  fetch(`${SERVER_API_URL}${cleanedEndpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: content ? JSON.stringify(content) : undefined,
  })
    .then(async (serverResponse) => {
      const data = await serverResponse.json();

      if (!serverResponse.ok || data.error) {
        return next(actionWith({
          payload: data.error || { error: 'Server error occurred' },
          type: failureType,
        }));
      }

      return next(actionWith({
        payload: data,
        type: successType,
      }));
    })
    .catch(
      (err) => {
        
        console.log(err)
        return next(actionWith({
          payload: err.message || { error: 'Server error occurred' },
          type: failureType,
        }))
      }
    );
};


export default middleware;
