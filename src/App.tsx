import React from 'react';
import logo from './logo.svg';
import { UserLogin } from './features/user/UserLogin';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<UserLogin />
			</header>
			<section></section>
		</div>
	);
}

export default App;
