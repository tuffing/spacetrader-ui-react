import { url, AuthTokenBodyFail } from '../../api';

export enum TokenPresets {
	invalidToken = '1234-1234',
	emptyToken = ''
}

export const routeError404: AuthTokenBodyFail = {
	error: {
		message:
			'This route does not exist. Did you type the route correctly? Most route resources are plural except for "/game/", "/game/status" and "/users/:username/token"',
		code: 404
	}
};

export const invalidTokenError401: AuthTokenBodyFail = {
	error: {
		message:
			'Token was invalid or missing from the request. Did you confirm sending the token as a query parameter or authorization header?',
		code: 40101
	}
};
