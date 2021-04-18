// @todo implement some error states and types

// should do a dev / staging etc check here. but spacetraders only has the one url endpoint
export const url = 'https://api.spacetraders.io';

export enum Status {
	idle = 'idle',
	loading = 'loading',
	succeeded = 'succeeded',
	failed = 'failed'
}

export const performRequest = async (
	method: 'POST' | 'GET',
	endpoint: string,
	headers?: HeadersInit,
	stringifiedData?: string
) => {
	const res: RequestInit = {
		method: method,
		cache: 'no-cache',
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			...headers
		}
	};
	if (stringifiedData) res.body = stringifiedData;

	const response = await fetch(`${url}/${endpoint}`, res);

	return response.json();
};
