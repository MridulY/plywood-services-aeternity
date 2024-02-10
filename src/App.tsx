import React from 'react';

import './App.css';
import Connect from './components/Wallet/Connect';
import Home from './components/Home';
import { Nav } from 'react-bootstrap';


const App = () => {
	
	

	return (
		<div className=' App-header'>
			<Nav/>
		<Home/>
		<Connect></Connect>
		</div>
		
	);
};

export default App;
