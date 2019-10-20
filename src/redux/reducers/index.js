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
import { utilsReducer } from './utils'

export default combineReducers({
    sentenceRulesReducer,
    sentenceReducer,
    reviewReducer,
    utilsReducer,
    ruleReducer,
    userReducer,
})