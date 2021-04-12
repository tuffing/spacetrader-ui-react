import thunk from 'redux-thunk';
import { initialState } from './userSlice';
import { AuthBody } from './api';

const middlewares = [thunk];

import userReducer, { authenticate, setUserName, setAccessToken } from './userSlice';

// @TODO Test the auth thunk directly! https://stackoverflow.com/questions/62253049/testing-createasyncthunk-redux-toolkit-jest

const successBody: AuthBody = {
	token: 'd816ae03-5cc4-46b7-9215-5978a71a8149',
	user: {
		id: 'cklxd8vpr301164iw89x8186uts',
		username: 'tuffing',
		picture: null,
		email: null,
		credits: 15,
		createdAt: '2021-03-06T06:49:04.144Z',
		updatedAt: '2021-03-06T06:49:04.143Z',
	},
};

const errorBody = {
	message: 'Username has already been claimed.',
	code: 40901,
};

describe('User reducer', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, { type: null })).toEqual({ ...initialState });
	});

	it('UserName should set', () => {
		expect(userReducer(initialState, { type: setUserName, payload: 'TestUser' })).toEqual({
			...initialState,
			username: 'TestUser',
		});
	});

	it('auth should successfully work from payload', () => {
		expect(userReducer(initialState, { type: authenticate.fulfilled, payload: successBody })).toEqual({
			...initialState,
			username: successBody.user.username,
			token: successBody.token,
			credits: successBody.user.credits,
		});
	});

	it('auth should handle rejection', () => {
		expect(userReducer(initialState, { type: authenticate.rejected, error: errorBody })).toEqual({
			...initialState,
			status: 'failed',
			error: errorBody.message,
		});
	});
});
