// 2019-10-19
// Daniel Nicolas Gisolfi

import * as ActionTypes from '../constants';


export const defaultState = {
	loggedIn: false,
	user: {
        first: 'Daniel',
        last: 'Gisolfi',
        email: 'Daniel.Gisolfi1@marist.edu',
        id: 20074558
	},
	error: null
}

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {

		default:
			return state;
	}
};