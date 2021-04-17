// server-handlers.js
//main handlers for all of our end points

import { rest } from 'msw';
import { AuthTokenSuccessBody } from './responses/user';

export const handlers = [
	//user Auth
	rest.post('https://api.spacetraders.io/users/:username/token', async (req, res, ctx) => {
		const { username } = req.params;

		const response = { ...AuthTokenSuccessBody };
		response.user.username = username;
		return res(ctx.json(response));
	}),
];
