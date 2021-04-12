import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

//@TODO test if token is there show login, if is there, dont..
test('renders learn react link', () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	expect(getByText(/Login/i)).toBeInTheDocument();
});
