import { availableShips } from './ships';
import { availableShipsSuccessBody } from './mockServer/responses/ships';
import { TokenPresets, invalidTokenError401 } from './mockServer/responses/apiGeneral';

describe('Ship Api Requests', () => {
	it('Valid token should return a list of ships', async () => {
		const result = await availableShips('abcdef');

		expect(result).toEqual(availableShipsSuccessBody);
	});

	it('Invalid token should 401', async () => {
		const result = await availableShips(TokenPresets.invalidToken);

		expect(result).toEqual(invalidTokenError401);
	});

	it('Empty token should 401', async () => {
		const result = await availableShips(TokenPresets.emptyToken);

		expect(result).toEqual(invalidTokenError401);
	});
});
