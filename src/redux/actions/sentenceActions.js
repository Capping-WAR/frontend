// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';
import { fetchSentenceToBeReviewed } from './utilActions';
import store from '../store';

export const fetchSentence = (sentenceID) => ({
	type: ActionTypes.API_MIDDLEWARE_INVOKE,
	[ActionTypes.API_MIDDLEWARE_INVOKE]: {
		route: ActionTypes.API_MIDDLEWARE_SENTENCE_ENDPOINT,
		endpoint: `/${sentenceID}`,
		method: 'GET',
		types: [
			ActionTypes.GET_SENTENCE_REQUEST,
			ActionTypes.GET_SENTENCE_SUCCESS,
			ActionTypes.GET_SENTENCE_FAILURE,
		],
	},
  });
  
  export const doneFetchingSentence = () => (
	{
		type: ActionTypes.DONE_GETTING_SENTENCE,
	}
  );

export const fetchSentenceForReview = () =>  (dispatch, getState, subscribe) => {
	// Get the Sentence ID of the sentence to be reviewed
	return new Promise((resolve, reject) => {
		const state = getState();
		const { reviewer } = state.reviewerReducer;
		dispatch(fetchSentenceToBeReviewed(
			`SELECT * FROM SentenceToBeReviewed(${reviewer.id});`
		));
		resolve();
	})
	.then(() => {
		const unsubscribe = store.subscribe(() => {
			const state = getState();
			const { isFetchingSentenceToReview, sentenceToReview } = state.utilsReducer;

			if (!isFetchingSentenceToReview) {
				unsubscribe()
				if (sentenceToReview !== undefined) {
					
					if (sentenceToReview.sentencetobereviewed.length !== 0){
						dispatch(fetchSentence(sentenceToReview.sentencetobereviewed[0][0]))
					} else {
                        dispatch(noSentence())
                    }
				} else {
					console.log('This shouldnt happen, something has gone arye')
				}
			}
		});
	})
	.catch((err) => {
		console.log(err)
		// handle error
	});
};

export const noSentence = () => (
    {
		type: ActionTypes.NO_SENTENCES,
	}
);