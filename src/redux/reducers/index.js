// 2019-10-19
// Daniel Nicolas Gisolfi

/**
 * @module src/components/redux/reducers.index.js
 * @fileoverview The main `Redux` reducer module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */


import { combineReducers } from 'redux';
import { sentenceReducer } from './sentences'
import { sentenceRulesReducer } from './sentenceRules'
import { ruleReducer } from './rules'
import { reviewReducer } from './reviews'
import { userReducer } from './users'


export const initialState = {
    isLoading: false,
    loggedIn: false,
    isFetchingSentence: false,
    isFetchingRules: false,
    user: {
        first: 'Daniel',
        last: 'Gisolfi',
        email: 'Daniel.Gisolfi1@marist.edu',
        id: 20074558
    },
    ruleReviewID: undefined,
    rules: undefined,
    sentence: undefined,
    error: null,
};

export default combineReducers({
    sentenceRulesReducer,
    sentenceReducer,
    reviewReducer,
    ruleReducer,
    userReducer
})