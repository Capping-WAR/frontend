// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';
import { initialState } from './index';

export const sentenceRulesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_RULE_REVIEW_REQUEST:
			return {
				...state,
				isFetchingRuleReview: true
			}

		case ActionTypes.DONE_GETTING_RULE_REVIEW:
			return {
				...state,
				isFetchingRuleReview: false
			}

		case ActionTypes.GET_RULE_REVIEW_SUCCESS:
			return {
				...state,
				ruleReviewID: action.payload.SentenceRule[0][1],
				isFetchingRuleReview: false
			}

		case ActionTypes.GET_RULE_REVIEW_FAILURE:
			return {
				...state,
				isFetchingRuleReview: false,
				error: action.payload.error || 'Could not get Rule Review',
			}

		default:
			return state;
	}
};