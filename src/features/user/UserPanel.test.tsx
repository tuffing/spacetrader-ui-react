import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import UserPanel from './UserPanel';

/* 
 @TODO test / spy on login button
*/

test('renders User panel', () => {
	const panel = render(
		<Provider store={store}>
			<UserPanel />
		</Provider>
	);

	expect(panel).toMatchSnapshot();
});
