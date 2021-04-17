import React from 'react';
import { RootState } from './app/store';
import logo from './logo.svg';
import UserLogin from './features/user/UserLogin';
import { UserPanel } from './features/user/UserPanel';
import styles from './App.module.css';
import { useSelector } from 'react-redux';

function App() {
	const token = useSelector((state: RootState) => state.userReducer.token);

	if (!token) {
		return (
			<div className={styles.app}>
				<header className={styles.appHeader}>{<UserLogin />}</header>
			</div>
		);
	}

	return (
		<div className={styles.app}>
			<UserPanel />
		</div>
	);
}

export default App;
