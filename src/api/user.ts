import { performRequest } from './api';

export interface AuthTokenBody {
	token: string;
	user: {
		id: string;
		username: string;
		picture: string | null;
		email: string | null;
		credits: number;
		createdAt: string;
		updatedAt: string;
	};
}

/**
 * Fetches a auth token from Space Trader.
 * There is no user/pass in this game. Whoever tries to use a username first, gets a token.
 * the token is valid forever.. or until a server reset (weekly as of April 2021)
 * @param {string} username           Username to try and claim.
 * @returns {(AuthTokenBody|AuthTokenBodyFail)}
 */
export const requestToken = async (username: string) => {
	const response = await performRequest('POST', `users/${username}/token`);

	return response;
};
