import { setUserName } from '../../../features/user/userSlice';
import { AuthTokenBody, AuthTokenBodyFail } from '../../user';

export enum AuthFailParams {
	usernameTaken = 'user-taken'
}

export const authTokenSuccessBody: AuthTokenBody = {
	token: '12345678-1234-1234-1234-12345678912',
	user: {
		id: 'cklxd8vpr301164iw89x8186uts',
		username: 'abcdef',
		picture: null,
		email: null,
		credits: 15,
		createdAt: '2021-03-06T06:49:04.144Z',
		updatedAt: '2021-03-06T06:49:04.143Z'
	}
};

export const authTokenErrorUserTakenBody: AuthTokenBodyFail = {
	error: {
		message: 'Username has already been claimed.',
		code: 40901
	}
};
