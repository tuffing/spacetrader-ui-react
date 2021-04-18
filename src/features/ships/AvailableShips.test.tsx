import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { store } from '../../app/store';
import AvailableShips from './AvailableShips';
import { setAvailableShips, setStatus } from './shipsSlice';
import { availableShipsSuccessBody } from '../../api/mockServer/responses/ships';

describe('Available Ships Component', () => {
	beforeAll(() => {
		store.dispatch(setAvailableShips(availableShipsSuccessBody.ships));
	});

	it('Available Ships Snapshot', () => {
		const availableShips = render(
			<Provider store={store}>
				<AvailableShips />
			</Provider>
		);

		expect(availableShips).toMatchSnapshot();
	});

	it('All Availabe ships rendered', () => {
		const availableShips = render(
			<Provider store={store}>
				<AvailableShips />
			</Provider>
		);

		expect(screen.getAllByTestId('ShipItem').length.toString()).toMatch(
			availableShipsSuccessBody.ships.length.toString()
		);

		store.dispatch(setAvailableShips([]));

		expect(screen.queryAllByTestId('ShipItem').length.toString()).toMatch('0');
	});

	// @todo connection error, filters?
});
