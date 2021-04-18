// server-handlers.js
//main handlers for all of our end points

import { rest } from 'msw';
import { url } from '../api';
import { authTokenSuccessBody, authTokenErrorUserTakenBody, AuthFailParams } from './responses/user';
import { routeError404, invalidTokenError401, TokenPresets } from './responses/apiGeneral';
import { availableShipsSuccessBody } from './responses/ships';

export const handlers = [
	// @todo Split this out when it starts getting unwieldy
	//user Auth
	rest.post(`${url}/users/:username/token`, async (req, res, ctx) => {
		const { username } = req.params;

		switch (username) {
			case AuthFailParams.usernameTaken:
				return res(ctx.json(authTokenErrorUserTakenBody));
			case AuthFailParams.usernameEmpty:
				return res(ctx.status(404), ctx.json(routeError404));
			default:
				const response = { ...authTokenSuccessBody };
				response.user.username = username;
				return res(ctx.json(response));
		}
	}),
	// ships
	rest.get(`${url}/game/ships`, async (req, res, ctx) => {
		const bearer = req.headers.get('Authorization')?.split(' ')[1] ?? '';

		switch (bearer) {
			case TokenPresets.invalidToken:
			case TokenPresets.emptyToken:
				return res(ctx.status(401), ctx.json(invalidTokenError401));
			default:
				return res(ctx.json({ ...availableShipsSuccessBody }));
		}
	})
];
