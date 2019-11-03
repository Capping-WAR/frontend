// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
    isFetchingReviewer: false,
    reviewer: undefined,
	error: null,
}    

export const reviewerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_REVIEWER_REQUEST:
            return {
                ...state,
                isFetchingReviewer: true,
            }

        case ActionTypes.GET_REVIEWER_SUCCESS:
            return {
                ...state,
                isFetchingReviewer: false,
                reviewer: action.payload.Reviewer
            }

        case ActionTypes.GET_REVIEWER_FAILURE:
            return {
                ...state,
                isFetchingReviewer: false,
                error: action.payload.error || 'Could not get Reviewers',
            }
        
        case ActionTypes.DONE_GETTING_REVIEWER:
            return {
                ...state,
                isFetchingReviewer: false,
            }

        default:
            return state;
    }

}