import React, { useEffect } from 'react';
import { RootState } from './app/store';
import { getAvailableShips } from './features/ships/shipsSlice';
import { useSelector, useDispatch } from 'react-redux';
import UserLogin from './features/user/UserLogin';
import UserPanel from './features/user/UserPanel';
import AvailableShips from './features/ships/AvailableShips';
import styles from './App.module.css';

function App() {
	const dispatch = useDispatch();
	const token = useSelector((state: RootState) => state.user.token);

	useEffect(() => {
		if (token) dispatch(getAvailableShips(token));
	}, [token]);

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
			<AvailableShips />
		</div>
	);
}

export default App;
