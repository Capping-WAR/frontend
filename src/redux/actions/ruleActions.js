// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const fetchRules = () => ({
    type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_RULES_ENDPOINT,
      endpoint: '',
      method: 'GET',
      types: [
        ActionTypes.GET_RULES_REQUEST,
        ActionTypes.GET_RULES_SUCCESS,
        ActionTypes.GET_RULES_FAILURE,
      ],
    },
  });
  
  export const doneFetchingRules = () => (
    {
      type: ActionTypes.DONE_GETTING_RULES,
    }
  );