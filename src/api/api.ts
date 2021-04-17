// @todo implement some error states and types

// should do a dev / staging etc check here. but spacetraders only has the one url endpoint
export const url = 'https://api.spacetraders.io';

export enum Status {
	idle = 'idle',
	loading = 'loading',
	succeeded = 'succeeded',
	failed = 'failed',
}

export const performPostRequest = async (endpoint: string, stringifiedData?: string) => {
	const response = await fetch(`${url}/${endpoint}`, {
		method: 'POST',
		cache: 'no-cache',
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
		body: stringifiedData,
	});

	return response.json();
};
