// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';
import { fetchSearch } from './utilActions';
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

export const fetchSentenceToBeReviewed = () =>  (dispatch, getState, subscribe) => {
	// Get the Sentence ID of the sentence to be reviewed
	return new Promise((resolve, reject) => {
		const state = getState();
		const { reviewer } = state.reviewerReducer;
		console.log(reviewer)
		dispatch(fetchSearch(
			`SELECT * FROM SentenceToBeReviewed(${reviewer.id});`
		));
		resolve();
	})
	.then(() => {
		const unsubscribe = store.subscribe(() => {
			const state = getState();
			const { isFetchingSearch, SearchResults } = state.utilsReducer;

			if (!isFetchingSearch) {
				unsubscribe()
				if (SearchResults !== undefined) {
					
					if (SearchResults.sentencetobereviewed.length != 0){
						dispatch(fetchSentence(SearchResults.sentencetobereviewed[0][0]))
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