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
			}
  
		case ActionTypes.POST_REVIEW_SUCCESS:
			return {
				...state,
			}	
  
		case ActionTypes.POST_REVIEW_FAILURE:
			return {
				...state,
				error: action.payload.error || 'Could not post Review',
			}

		default:
			return state;
	}
};