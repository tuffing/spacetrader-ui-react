import { url } from './api';

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
	const response = await fetch(`${url}/users/${username}/token`, {
		method: 'POST',
		cache: 'no-cache',
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response.json();
};
