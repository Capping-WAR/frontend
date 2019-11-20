// 2019-11-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
    isPostingLoginStats: false,
    isPostingUsersStats: false,
	error: null,
}

export const statisticsReducer = (state = defaultState, action) => {
	switch (action.type) {
		
		case ActionTypes.POST_LOGIN_STATS_REQUEST:
			return {
				...state,
				isPostingLoginStats: true
            }
            

        case ActionTypes.POST_LOGIN_STATS_SUCCESS:
            return {
                ...state,
                isPostingLoginStats: false,
            }
        
		case ActionTypes.POST_LOGIN_STATS_FAILURE:
			return {
				...state,
				isPostingLoginStats: false,
				error: action.payload.error || 'Could not get post login stats',
            }
            
        case ActionTypes.POST_USER_STATS_REQUEST:
            return {
                ...state,
                isPostingUsersStats: true
            }
            

        case ActionTypes.POST_USER_STATS_SUCCESS:
            return {
                ...state,
                isPostingUsersStats: false,
            }
        
        case ActionTypes.POST_USER_STATS_FAILURE:
            return {
                ...state,
                isPostingUsersStats: false,
                error: action.payload.error || 'Could not get post login stats',
            }

		default:
			return state;
	}
};