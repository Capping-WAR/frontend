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

export const submitCorrectReviews = (review, rules) => (dispatch, getState, subscribe) => {
	if (review.sentenceID === undefined) {
		return 
	} 
	return new Promise((resolve, reject) => {
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
		resolve();
	})
	.then(() => {
		const unsubscribe = store.subscribe(() => {
			const state = getState();
			const { isSubmitingReview } = state.reviewReducer;
			if (!isSubmitingReview) {
				unsubscribe();
				dispatch(fetchSentenceToBeReviewed())
			}
		});
	})
	.catch((err) => {
		console.log(err)
		// handle error
	});
};

export const submitIncorrectReviews = (review, rules, checkboxVals) => (dispatch, getState, subscribe) => {
	if (review.sentenceID === undefined) {
		return 
	} 
	return new Promise((resolve, reject) => {
		rules.map((rule) => {
			if (!checkboxVals.hasOwnProperty(rule[0])) {
				const key = rule[0]
				Object.assign(checkboxVals, { [key]: 1 })// it was correct put the val in
			}
			return new Promise((resolve, reject) => {
				dispatch(
					submitSingleReview({
						...review, 
						ruleReviewID: rule[0], 
						ruleReview: checkboxVals[rule[0]]
					})
				)
				resolve();
			})
			.catch((err) => {
				console.log(err)
				// handle error
			});
		})
		resolve();
	})
	.then(() => {
		const unsubscribe = store.subscribe(() => {
			const state = getState();
			const { isSubmitingReview } = state.reviewReducer;
			if (!isSubmitingReview) {
				unsubscribe();
				dispatch(fetchSentenceToBeReviewed())
			}
		});
	})
	.catch((err) => {
		console.log(err)
		// handle error
	});
};