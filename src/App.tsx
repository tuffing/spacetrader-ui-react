import React from 'react';
import { RootState } from './app/store';
import logo from './logo.svg';
import { UserLogin } from './features/user/UserLogin';
import { UserPanel } from './features/user/UserPanel';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const token = useSelector((state: RootState) => state.userReducer.token);

	if (!token) {
		return (
			<div className="App">
				<header className="App-header">{<UserLogin />}</header>
				<div>ABC DEF GHI</div>
			</div>
		);
	}

	return (
		<div className="App">
			<div>
				<UserPanel />
			</div>
		</div>
	);
}

export default App;
