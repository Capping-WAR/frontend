// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
    isAddingReviewer: false,
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
            console.log(action.payload.Reviewer)
            return {
                ...state,
                isFetchingReviewer: false,
                reviewer: {
                    id: action.payload.Reviewer[0][0],
                    email: action.payload.Reviewer[0][1],
                    firstName: action.payload.Reviewer[0][2],
                    lastName: action.payload.Reviewer[0][3],
                    isAdmin: action.payload.Reviewer[0][4],
                    reputation: action.payload.Reviewer[0][5],
                }
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
        
        case ActionTypes.RESET_REVIEWER:
            return {
                ...defaultState
            }

        case ActionTypes.POST_REVIEWER_REQUEST:
            return {
                ...state,
                isAddingReviewer: true,
            }

        case ActionTypes.POST_REVIEWER_SUCCESS:
            return {
                ...state,
                isAddingReviewer: false,
                reviewer: action.payload.Reviewer
            }

        case ActionTypes.POST_REVIEWER_FAILURE:
            return {
                ...state,
                isAddingReviewer: false,
                error: action.payload.error || 'Could not add Reviewer',
            }

        default:
            return state;
    }

}