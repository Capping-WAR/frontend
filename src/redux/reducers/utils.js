// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
	isFetchingSentenceToReview: false,
    sentenceToReview: undefined,
    isFetchingLeaderboard: false,
    leaderboard:undefined,
	error: null,
}

export const utilsReducer = (state = defaultState, action) => {
	switch (action.type) {
		
		case ActionTypes.GET_SENTENCE_TO_REVIEW_REQUEST:
			return {
				...state,
				isFetchingSentenceToReview: true
			}
	
		case ActionTypes.GET_SENTENCE_TO_REVIEW_SUCCESS:
			return {
				...state,
				isFetchingSentenceToReview: false,
				sentenceToReview: action.payload
			}
		
		case ActionTypes.GET_SENTENCE_TO_REVIEW_FAILURE:
			return {
				...state,
				isFetchingSentenceToReview: false,
				error: action.payload.error || 'Could not get Search Results',
            }
        case ActionTypes.GET_LEADERBOARD_REQUEST:
            return {
                ...state,
                isFetchingLeaderboard: true
            }
    
        case ActionTypes.GET_LEADERBOARD_SUCCESS:
            return {
                ...state,
                isFetchingLeaderboard: false,
                leaderboard: action.payload.gettopreviewers
            }
        
        case ActionTypes.GET_LEADERBOARD_FAILURE:
            return {
                ...state,
                isFetchingLeaderboard: false,
                error: action.payload.error || 'Could not get Leaderboard',
            }

		default:
			return state;
	}
};