// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';

export const defaultState = {
	error: null,
	isFetchingRules: false,
	rules: undefined,
}

export const ruleReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.GET_RULES_REQUEST:
			return {
				...state,
				isFetchingRules: true,
			}
  
		case ActionTypes.DONE_GETTING_RULES:
			return {
				...state,
				isFetchingRules: false,
			}
		
		case ActionTypes.GET_RULES_SUCCESS:
			return {
				...state,
				isFetchingRules: false,
				rules: action.payload.Rules
			}
			
		case ActionTypes.GET_RULES_FAILURE:
			return {
				...state,
				isFetchingRules: false,
				error: action.payload.error || 'Could not get Rules',
			}

		default:
			return state;
	}
};