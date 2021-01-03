import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../main/main';
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/about" exact></Route>
				<Route path="/labs" exact></Route>
				<Route path="/" exact>
					<Main />
				</Route>
				<Route>
					404
					<br />
					<Link to="/">go to main</Link>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
