// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';
import { fetchRuleReviewID, doneFetchingRuleReviewID } from './sentenceRuleActions';
import store from '../store';

export const addPeopleReview = (review) => ({
	type: ActionTypes.API_MIDDLEWARE_INVOKE,
	[ActionTypes.API_MIDDLEWARE_INVOKE]: {
		route: ActionTypes.API_MIDDLEWARE_PEOPLE_REVIEWS_ENDPOINT,
		endpoint: '',
		method: 'POST',
		content: {
			sentenceID: review.sentenceID,
			reviewerID: review.reviewerID,
			ruleReviewID: review.ruleReviewID,
			ruleReview: review.ruleReview,
			dateAdded: "now()"
		},
		types: [
			ActionTypes.POST_REVIEW_REQUEST,
			ActionTypes.POST_REVIEW_SUCCESS,
			ActionTypes.POST_REVIEW_FAILURE,
		],
	},
  }
);

export const submitReview = (review) => (dispatch, getState, subscribe) => {
	if (review.ruleReviewID === undefined) {
		return new Promise((resolve, reject) => {
			dispatch(fetchRuleReviewID(review.sentenceID));
			resolve();
		})
		.then(() => {
			const unsubscribe = store.subscribe(() => {
			const { isFetchingRuleReview, ruleReviewID } = getState();
			if (isFetchingRuleReview) {
				// console.log('FETCHING')
			} else {
				// console.log('DONE', getState())
				unsubscribe()
				dispatch(doneFetchingRuleReviewID())
				dispatch(addPeopleReview({
				...review,
				ruleReviewID: ruleReviewID
				}));
				// dispatch(fetchSentenceToBeReviewed());
			}
			})
		})
		.catch((err) => {
			console.log(err)
			// handle error
			dispatch(doneFetchingRuleReviewID())
		});
	}
};