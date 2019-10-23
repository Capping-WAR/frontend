// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const fetchReviewer = (reviewerID) => ({
    type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_REVIEWER_ENDPOINT,
      endpoint: `/${reviewerID}`,
      method: 'GET',
      types: [
        ActionTypes.GET_REVIEWER_REQUEST,
        ActionTypes.GET_REVIEWER_SUCCESS,
        ActionTypes.GET_REVIEWER_FAILURE,
      ],
    },
});


export const doneFetchingReviewer = () => (
    {
      type: ActionTypes.DONE_GETTING_REVIEWER,
    }
);