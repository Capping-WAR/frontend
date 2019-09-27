/**
 * 
 */

import 'whatwg-fetch';
import * as ActionTypes from '../constants';


const SERVER_API_ENDPOINT_BASE = '/api/v1';

const middleware = store => next => action => {
  console.log('AT MIDDLWARE LEVEL');
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

  const cleanedRoute = route === ActionTypes.API_MIDDLEWARE_USERS_ENDPOINT
    ? SERVER_API_USER_ACTIONS;

  const cleanedEndpoint = cleanedRoute + endpoint;

  // Remove proxy header information and forward action to next stage properly.
  const actionWith = (data) => {
    const finalAction = { ...action, ...data };
    delete finalAction[ActionTypes.API_MIDDLEWARE_INVOKE];
    return finalAction;
  };

  window.fetch(cleanedEndpoint, {
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
      (err) => next(actionWith({
        payload: err.message || { error: 'Server error occurred' },
        type: failureType,
      })),
    );
};


export default middleware;
