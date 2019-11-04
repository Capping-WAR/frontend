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

export const resetReviewer = () => (
  {
    type: ActionTypes.RESET_REVIEWER
  }
);

// export const addReviewer = (user) => ({
//   type: ActionTypes.API_MIDDLEWARE_INVOKE,
//     [ActionTypes.API_MIDDLEWARE_INVOKE]: {
//       route: ActionTypes.API_MIDDLEWARE_REVIEWER_ENDPOINT,
//       endpoint: `/`,
//       method: 'POST',
//       content: {
//         admin: false, // set to false by default
//         emailAddress: user.email,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         reputation: 0, // gotta start somewhere...
//         reviewerID: user.id
//       },
//       types: [
//         ActionTypes.POST_REVIEWER_REQUEST,
//         ActionTypes.POST_REVIEWER_SUCCESS,
//         ActionTypes.POST_REVIEWER_FAILURE,
//       ],
//     },
//   }
// );