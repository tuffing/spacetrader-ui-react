import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { store } from '../../app/store';
import UserLogin from './UserLogin';
import { setStatus } from './userSlice';
import { Status } from '../../api/api';
import { AuthTokenSuccessBody } from '../../api/mockServer/responses/user';

describe('User Login Component', () => {
	beforeEach(() => {
		store.dispatch(setStatus(Status.idle));
	});

	it('User snapshot', () => {
		//@todo switch with enzyme or similar?
		const login = render(
			<Provider store={store}>
				<UserLogin />
			</Provider>
		);

		expect(login).toMatchSnapshot();
	});

	it('Login Disabled if username empty', () => {
		const login = render(
			<Provider store={store}>
				<UserLogin />
			</Provider>
		);

		expect(screen.getByTestId('LoginSubmit')).toHaveAttribute('disabled');
		userEvent.type(screen.getByTestId('UserName'), 'testUser');
		expect(screen.getByTestId('UserName')).toHaveValue('testUser');
		expect(screen.getByTestId('LoginSubmit')).not.toHaveAttribute('disabled');
	});

	it('Login disabled while checking auth', () => {
		store.dispatch(setStatus(Status.loading));
		const login = render(
			<Provider store={store}>
				<UserLogin />
			</Provider>
		);
		expect(screen.getByTestId('LoginSubmit')).toHaveAttribute('disabled');
		userEvent.type(screen.getByTestId('UserName'), 'testUser');
		//should stil be disabled
		expect(screen.getByTestId('LoginSubmit')).toHaveAttribute('disabled');
	});

	it('Login Button attempts login', async () => {
		const login = render(
			<Provider store={store}>
				<UserLogin />
			</Provider>
		);

		userEvent.type(screen.getByTestId('UserName'), 'testUser');
		userEvent.click(screen.getByTestId('LoginSubmit'));

		// @todo replace with something more logical.  in reality the token won't (shouldnt be!) be rendered
		expect(await screen.findByText(AuthTokenSuccessBody.token)).toBeInTheDocument();
	});

	it('Login Button attempts login but username is taken', async () => {
		// @TODO set up mocks etc to make the username is taken error test doable
		//..stub
	});
});
