// server-handlers.js
//main handlers for all of our end points

import { rest } from 'msw';
import { url } from '../api';
import { AuthTokenSuccessBody, AuthTokenErrorUserTakenBody, AuthFailParams } from './responses/user';

export const handlers = [
	//user Auth
	rest.post(`${url}/users/:username/token`, async (req, res, ctx) => {
		const { username } = req.params;

		switch (username) {
			case AuthFailParams.usernameTaken:
				return res(ctx.json(AuthTokenErrorUserTakenBody));
			default:
				const response = { ...AuthTokenSuccessBody };
				response.user.username = username;
				return res(ctx.json(response));
		}
	}),
];
