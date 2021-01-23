import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import Main from '../main/main';
import Works from '../works/works';
import Rules from '../rules/rules';
import Form from '../form/form';
import Footer from '../footer/footer';
import About from '../about/about';
import Preloader from '../preloader/preloader';

import { CLIENT_ROUTES } from '../../routes/routes';

import './App.css';

const App: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 3000);
	}, []);

	return (
		<div className="app">
			{isLoaded ? (
				<Router>
					<Header />
					<Switch>
						<Route path={CLIENT_ROUTES.auth.href} exact>
							<Form />
						</Route>
						<Route path={CLIENT_ROUTES.about.href} exact>
							<About />
						</Route>
						<Route path={CLIENT_ROUTES.works.href} exact>
							<Works />
						</Route>
						<Route path={CLIENT_ROUTES.rules.href} exact>
							<Rules />
						</Route>
						<Route path={CLIENT_ROUTES.main.href} exact>
							<Main />
						</Route>
						<Route>
							404
							<br />
							<Link to={CLIENT_ROUTES.main.href}>go to main</Link>
						</Route>
					</Switch>
					<Footer />
				</Router>
			) : (
				<Preloader />
			)}
		</div>
	);
};

export default App;
