/**
 * @module src/components/redux/reducers.index.js
 * @fileoverview The main `Redux` reducer module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import merge from 'lodash/merge';
import * as ActionTypes from '../constants';

import { combineReducers } from 'redux';
import { sentenceReducer } from './sentences'

export default combineReducers({
    sentenceReducer
})

