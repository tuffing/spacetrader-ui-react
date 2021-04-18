import { requestToken } from './user';
import { authTokenSuccessBody } from './mockServer/responses/user';
import { routeError404 } from './mockServer/responses/apiGeneral';

describe('User Api Requests', () => {
	it('Request should return token / user details', async () => {
		const result = await requestToken('abcdef');

		expect(result).toEqual(authTokenSuccessBody);
	});

	it('Empty username should return 404 route error', async () => {
		const result = await requestToken('');

		expect(result).toEqual(routeError404);
	});
});
