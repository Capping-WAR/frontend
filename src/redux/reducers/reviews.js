// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';
import { initialState } from './index';

export const reviewReducer = (state = initialState, action) => {
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