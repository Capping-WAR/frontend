import * as ActionTypes from '../constants';

export const updateLoginStats = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_STATISTICS_ENDPOINT,
    endpoint: `/loginStats`,
    method: 'POST',
    types: [
      ActionTypes.POST_LOGIN_STATS_REQUEST,
      ActionTypes.POST_LOGIN_STATS_SUCCESS,
      ActionTypes.POST_LOGIN_STATS_FAILURE,
    ],
  },
});

export const updateUserStats = (user_info) => ({
    type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_STATISTICS_ENDPOINT,
      endpoint: `/userStats`,
      method: 'POST',
      content: user_info,
      types: [
        ActionTypes.POST_USER_STATS_REQUEST,
        ActionTypes.POST_USER_STATS_SUCCESS,
        ActionTypes.POST_USER_STATS_FAILURE,
      ],
    },
});