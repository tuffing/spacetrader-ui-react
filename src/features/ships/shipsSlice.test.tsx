import thunk from 'redux-thunk';
import { initialState } from './shipsSlice';
import { Ships, Ship } from '../../api/ships';
import { availableShipsSuccessBody } from '../../api/mockServer/responses/ships';

import shipsReducer, { getAvailableShips, setStatus, setAvailableShips } from './shipsSlice';
import { Status } from '../../api/api';

const errorBodyFromCode = {
	message: 'Bad Gateway and such',
	code: 502
};

describe('Ships reducer', () => {
	it('should return the initial state', () => {
		expect(shipsReducer(undefined, { type: null })).toEqual({ ...initialState });
	});

	it('Available Ships should set', () => {
		expect(
			shipsReducer(initialState, { type: setAvailableShips, payload: availableShipsSuccessBody.ships })
		).toEqual({
			...initialState,
			availableShips: availableShipsSuccessBody.ships
		});
	});

	it('Status should set', () => {
		expect(shipsReducer(initialState, { type: setStatus, payload: Status.loading })).toEqual({
			...initialState,
			status: Status.loading
		});
	});

	it('status  should successfully work from payload', () => {
		expect(
			shipsReducer(initialState, { type: getAvailableShips.fulfilled, payload: availableShipsSuccessBody })
		).toEqual({
			...initialState,
			availableShips: availableShipsSuccessBody.ships,
			status: Status.idle
		});
	});

	it('Get ships should handle rejection', () => {
		expect(
			shipsReducer(initialState, { type: getAvailableShips.rejected, error: errorBodyFromCode })
		).toEqual({
			...initialState,
			status: 'failed',
			error: errorBodyFromCode.message
		});
	});
});
