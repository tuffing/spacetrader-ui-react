import React, { useState } from 'react';
import { RootState } from '../../app/store';
import { Status } from '../../api/api';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from './userSlice';
import userStyles from './User.module.css';
import styles from '../../Styles.module.css';

export default function UserLogin() {
	const token = useSelector((state: RootState) => state.userReducer.token);
	const error = useSelector((state: RootState) => state.userReducer.error);
	const status = useSelector((state: RootState) => state.userReducer.status);
	const dispatch = useDispatch();
	const [userName, setUserName] = useState('');

	return (
		<div>
			<div>
				Auth token: <span data-testid="token">{token ?? '[not set]'}</span>
			</div>
			<div>
				Errors: <span>{error ?? '[none]'}</span>
			</div>

			<div className={styles.row}>
				<input
					data-testid="UserName"
					className={styles.textbox}
					aria-label="User name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					data-testid="LoginSubmit"
					className={styles.button}
					disabled={!userName || status == Status.loading}
					onClick={() => dispatch(authenticate(userName))}
				>
					Login
				</button>
			</div>
			<div>Auth status: {status}</div>
			<div>Username: {userName}</div>
		</div>
	);
}
