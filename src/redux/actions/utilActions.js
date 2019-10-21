import * as ActionTypes from '../constants';

export const fetchSearch = (query) => ({
    type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
      endpoint: ``,
      method: 'POST',
      content: {
        query: query
      },
      types: [
        ActionTypes.GET_SEARCH_REQUEST,
        ActionTypes.GET_SEARCH_SUCCESS,
        ActionTypes.GET_SEARCH_FAILURE,
      ],
    },
  });