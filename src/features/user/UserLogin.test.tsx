import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import { store } from '../../app/store';
import UserLogin from './UserLogin';

/* 
 @TODO test / spy on login button
*/

test('renders learn react link', () => {
	//@todo switch with enzyme or similar?
	const renderer = new ShallowRenderer();

	renderer.render(
		<Provider store={store}>
			<UserLogin />
		</Provider>
	);

	const result = renderer.getRenderOutput();

	expect(result).toMatchSnapshot();
});
