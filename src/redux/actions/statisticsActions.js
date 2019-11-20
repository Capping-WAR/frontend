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


export const fetchUserCount = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: `SELECT COUNT(*) FROM Reviewers;`
    },
    types: [
      ActionTypes.FETCH_USER_COUNT_REQUEST,
      ActionTypes.FETCH_USER_COUNT_SUCCESS,
      ActionTypes.FETCH_USER_COUNT_FAILURE,
    ],
  },
});

export const doneFetchingUserCount = () => (
  {
    type: ActionTypes.DONE_FETCHING_USER_COUNT,
  }
);

export const fetchUsersByOS = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: `SELECT macosCount, windowsCount, otherCount FROM userStatistics;`
    },
    types: [
      ActionTypes.FETCH_USERS_BY_OS_REQUEST,
      ActionTypes.FETCH_USERS_BY_OS_SUCCESS,
      ActionTypes.FETCH_USERS_BY_OS_FAILURE,
    ],
  },
});

export const doneFetchingUsersByOS = () => (
  {
    type: ActionTypes.DONE_FETCHING_USERS_BY_OS,
  }
);

export const fetchLoginStats = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
  [ActionTypes.API_MIDDLEWARE_INVOKE]: {
    route: ActionTypes.API_MIDDLEWARE_SEARCH_ENDPOINT,
    endpoint: ``,
    method: 'POST',
    content: {
      query: `SELECT dayDate, loginCount, reviewCount FROM loginStatistics  ORDER BY dayDate ASC;`
    },
    types: [
      ActionTypes.FETCH_LOGIN_STATS_REQUEST,
      ActionTypes.FETCH_LOGIN_STATS_SUCCESS,
      ActionTypes.FETCH_LOGIN_STATS_FAILURE,
    ],
  },
});

export const doneFetchingLoginStats = () => (
  {
    type: ActionTypes.DONE_FETCHING_LOGIN_STATS,
  }
);