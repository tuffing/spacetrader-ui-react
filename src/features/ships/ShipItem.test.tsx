import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { store } from '../../app/store';
import ShipItem from './ShipItem';
import { availableShipsSuccessBody } from '../../api/mockServer/responses/ships';

describe('Available Ships Component', () => {
	it('Ship Item Snapshot', () => {
		const availableShips = render(
			<Provider store={store}>
				<ShipItem ship={availableShipsSuccessBody.ships[0]} />
			</Provider>
		);

		expect(availableShips).toMatchSnapshot();
	});
});
