// 2019-11-10
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const fetchThreads = () => ({
    type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_THREADS_ENDPOINT,
      endpoint: ``,
      method: 'GET',
      types: [
        ActionTypes.GET_THREADS_REQUEST,
        ActionTypes.GET_THREADS_SUCCESS,
        ActionTypes.GET_THREADS_FAILURE,
      ],
    },
  });


  

  export const doneFetchingThreads = () => (
    {
      type: ActionTypes.DONE_GETTING_THREADS,
    }
  );