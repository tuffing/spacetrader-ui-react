import { url, performPostRequest } from './api';

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

export interface AuthTokenBodyFail {
	error: {
		message: string;
		code: number;
	};
}

export const requestToken = async (username: string) => {
	const response = await performPostRequest(`users/${username}/token`);

	return response;
};
