// @TODO turn into a proper api library.
export const authCall = async (username: string) => {
	const response = await fetch(`https://api.spacetraders.io/users/${username}/token`, {
		method: 'POST',
		//mode: 'no-cors', // no-cors, *cors, same-origin
		cache: 'no-cache',
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response.json();
};

export interface AuthBody {
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
