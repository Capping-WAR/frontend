// 2019-11-10
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
    error: null,
    isFetchingThreads: false
}

export const aiReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.GET_THREADS_REQUEST:
			return {
				...state,
				isFetchingThreads: true,
			}
        
        case ActionTypes.DONE_GETTING_THREADS:
			return {
				...state,
				isFetchingThreads: false,
            }
            
		case ActionTypes.GET_THREADS_SUCCESS:
			return {
				...state,
				isFetchingThreads: false,
				threads: action.payload.data
			}
			
		case ActionTypes.GET_THREADS_FAILURE:
			return {
				...state,
				isFetchingThreads: false,
				error: action.payload.error || 'Could not get Threads',
			}

		default:
			return state;
	}
};