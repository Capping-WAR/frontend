// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
	isFetchingSearch: false,
	SearchResults: undefined,
	error: null,
}

export const utilsReducer = (state = defaultState, action) => {
	switch (action.type) {
		
		case ActionTypes.GET_SEARCH_REQUEST:
			return {
				...state,
				isFetchingSearch: true
			}
	
		case ActionTypes.GET_SEARCH_SUCCESS:
			return {
				...state,
				isFetchingSearch: false,
				SearchResults: action.payload
			}
		
		case ActionTypes.GET_SEARCH_FAILURE:
			return {
				...state,
				isFetchingSearch: false,
				error: action.payload.error || 'Could not get Search Results',
			}

		default:
			return state;
	}
};