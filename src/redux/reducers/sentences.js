// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
	error: null,
	isFetchingSentence: false,
	sentence: undefined,
}
	
export const sentenceReducer = (state = defaultState, action) => {
	switch (action.type) {

		case ActionTypes.GET_SENTENCE_REQUEST:
			return {
				...state,
				isFetchingSentence: true,
			}
		case ActionTypes.DONE_GETTING_SENTENCE:
			return {
				...state,
				isFetchingSentence: false,
			};
		
		case ActionTypes.GET_SENTENCE_SUCCESS:
			return {
				...state,
				isFetchingSentence: false,
				sentence: {
					id: action.payload.Sentence[0][0],
					text: action.payload.Sentence[0][2],
				}
			}
			
		case ActionTypes.GET_SENTENCE_FAILURE:
			return {
				...state,
				isFetchingSentence: false,
				error: action.payload.error || 'Could not get Sentences',
			}
			
		default:
			return state;
	}
};