// server-handlers.js
//main handlers for all of our end points

import { rest } from 'msw';
import { url } from '../api';
import { authTokenSuccessBody, authTokenErrorUserTakenBody, AuthFailParams } from './responses/user';
import { availableShipsSuccessBody } from './responses/ships';

export const handlers = [
	// @todo Split this out when it starts getting unwieldy
	//user Auth
	rest.post(`${url}/users/:username/token`, async (req, res, ctx) => {
		const { username } = req.params;

		switch (username) {
			case AuthFailParams.usernameTaken:
				return res(ctx.json(authTokenErrorUserTakenBody));
			default:
				const response = { ...authTokenSuccessBody };
				response.user.username = username;
				return res(ctx.json(response));
		}
	}),
	// ships
	rest.get(`${url}/game/ships`, async (req, res, ctx) => {
		return res(ctx.json({ ...availableShipsSuccessBody }));
	})
];
