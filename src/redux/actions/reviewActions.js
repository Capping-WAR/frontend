// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';
import { 
	fetchRuleReviewID, 
	doneFetchingRuleReviewID,  
} from './sentenceRuleActions';
import { fetchSentenceToBeReviewed } from './sentenceActions';
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

export const submitSingleReview = (review) => (dispatch, getState, subscribe) => {
	return new Promise((resolve, reject) => {
		dispatch(addPeopleReview(review));
		resolve();
	})
	.then(() => {
		const unsubscribe = store.subscribe(() => {
			const state = getState();
			const { isAddingReview } = state.reviewReducer;
		})
	})
	.catch((err) => {
		console.log(err)
		// handle error
	});
};

export const submitAllRuleReviews = (review, rules) => (dispatch, getState, subscribe) => {
	console.log(review)
	if (review.sentenceID === undefined) {
		return 
	} 
	return new Promise((resolve, reject) => {
		resolve(
			rules.map((rule) => {
				return new Promise((resolve, reject) => {
					dispatch(submitSingleReview({...review, ruleReviewID: rule[0]}))
					resolve();
				})
				.catch((err) => {
					console.log(err)
					// handle error
				});
			})
		);
	})
	.then((promises) => {
		const unsubscribe = store.subscribe(() => {
			const state = getState();
			const { isSubmitingReview } = state.reviewReducer;
			console.log(state)
			if (!isSubmitingReview) {
				unsubscribe();
				Promise.all(promises)
				dispatch(fetchSentenceToBeReviewed())
			}
		});
	})
	.catch((err) => {
		console.log(err)
		// handle error
	});
};