// 2019-11-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
    isPostingLoginStats: false,
    isPostingUsersStats: false,
    isFetchingUserCount: false,
    userCount: undefined,
    isFetchingUsersByOS: false,
    usersByOS: undefined,
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

            case ActionTypes.FETCH_USER_COUNT_REQUEST:
                return {
                    ...state,
                    isFetchingUserCount: true
                }
            
            case ActionTypes.FETCH_USER_COUNT_SUCCESS:
                return {
                    ...state,
                    isFetchingUserCount: false,
                    userCount: action.payload.reviewers
                }
            
            case ActionTypes.FETCH_USER_COUNT_FAILURE:
                return {
                    ...state,
                    isFetchingUserCount: false,
                    error: action.payload.error || 'Could not fetch user count',
                }
            
            case ActionTypes.DONE_FETCHING_USER_COUNT:
                return {
                    ...state,
                    isFetchingUserCount: false,
                }


                case ActionTypes.FETCH_USERS_BY_OS_REQUEST:
                    return {
                        ...state,
                        isFetchingUsersByOS: true
                    }
                
                case ActionTypes.FETCH_USERS_BY_OS_SUCCESS:
                    console.log(action.payload.userstatistics[0][0])
                    return {
                        ...state,
                        isFetchingUsersByOS: false,
                        usersByOS: {
                            Mac: action.payload.userstatistics[0][0],
                            Windows: action.payload.userstatistics[0][1],
                            Other: action.payload.userstatistics[0][2]
                        }
                    }
                
                case ActionTypes.FETCH_USERS_BY_OS_FAILURE:
                    return {
                        ...state,
                        isFetchingUsersByOS: false,
                        error: action.payload.error || 'Could not fetch users by OS',
                    }
                
                case ActionTypes.DONE_FETCHING_USERS_BY_OS:
                    return {
                        ...state,
                        isFetchingUsersByOS: false,
                    }

		default:
			return state;
	}
};