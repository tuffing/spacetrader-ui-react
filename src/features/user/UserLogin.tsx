import React, { useState } from 'react';
import { RootState } from '../../app/store';
import { Status } from '../../api/api';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from './userSlice';
import userStyles from './User.module.css';
import styles from '../../Styles.module.css';

export default function UserLogin() {
	const token = useSelector((state: RootState) => state.user.token);
	const error = useSelector((state: RootState) => state.user.error);
	const status = useSelector((state: RootState) => state.user.status);
	const dispatch = useDispatch();
	const [userName, setUserName] = useState('');

	return (
		<div className={styles.container}>
			<div className={styles.header}>Welcome to Space Traders</div>
			<input
				data-testid="UserName"
				className={styles.textbox}
				aria-label="User name"
				placeholder="User name"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button
				data-testid="LoginSubmit"
				className={styles.button}
				disabled={!userName || status === Status.loading}
				onClick={() => dispatch(authenticate(userName))}
			>
				Get Started
			</button>
			{error ? <div className={styles.error}>{error}</div> : <></>}
			{token ? <span data-testid="token">{token}</span> : <></>}
			<div className={styles.creditNote}>
				Implementation of <a href="https://spacetraders.io">spacetraders.io</a>
			</div>
		</div>
	);
}
