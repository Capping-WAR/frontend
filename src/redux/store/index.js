/**
 * @module src/redux/store/index.js
 * @fileoverview The main `Redux` store module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Middleware from '../middleware';
import { initialState, baseReducer } from '../reducers';

const store = createStore(
  baseReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, Middleware),
  )
);


export default store;