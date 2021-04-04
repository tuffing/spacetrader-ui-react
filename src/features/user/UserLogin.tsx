import React, { useState } from 'react';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setAccessToken, authenticate } from './userSlice';
import styles from './User.module.css';

export function UserLogin() {
	const token = useSelector((state: RootState) => state.user.token);
	const error = useSelector((state: RootState) => state.user.error);
	const status = useSelector((state: RootState) => state.user.status);
	const dispatch = useDispatch();
	const [userName, setUserName] = useState('');

	return (
		<div>
			<div>Auth token: {token ?? '[not set]'}</div>
			<div>Errors: {error ?? '[none]'}</div>

			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label="User name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button className={styles.button} disabled={!userName} onClick={() => dispatch(authenticate(userName))}>
					Login
				</button>
			</div>
			<div>Auth status: {status}</div>
		</div>
	);
}
