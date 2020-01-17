import React from 'react';
import './css/Main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/index';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Main} />
			</Switch>
		</Router>
	);
}

export default App;
