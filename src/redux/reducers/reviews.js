// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
	error: null,
}    

export const reviewReducer = (state = defaultState, action) => {
	switch (action.type) {

		case ActionTypes.POST_REVIEW_REQUEST:
			return {
				...state,
				isAddingReview: true
			}
  
		case ActionTypes.POST_REVIEW_SUCCESS:
			return {
				...state,
				isAddingReview: false
			}	
  
		case ActionTypes.POST_REVIEW_FAILURE:
			return {
				...state,
				isAddingReview: false,
				error: action.payload.error || 'Could not post Review',
			}

		case ActionTypes.SUBMIT_REVIEW_REQUEST:
			return {
				...state,
				isSubmitingReview: true
			}
			
		case ActionTypes.SUBMIT_REVIEW_SUCCESS:
			return {
				...state,
				isSubmitingReview: false
			}	
		
		case ActionTypes.SUBMIT_REVIEW_FAILURE:
			return {
				...state,
				isSubmitingReview: false,
				error: action.payload.error || 'Could not post Review',
			}

		default:
			return state;
	}
};