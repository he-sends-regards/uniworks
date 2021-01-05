import React, { useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import './style.css';
import NavBar from './components/navBar/navBar';

const HeaderNavigation = () => {
	const [isFormShown, setFormShown] = useState(false);

	const currentLocation = useLocation().pathname;

	return (
		<>
			<header>
				<nav>
					<div className="nav-wrapper purple darken-2 px1">
						<Link
							to="/"
							className="brand-logo center"
							style={{
								fontFamily: 'Montserrat, sans-serif',
								fontWeight: 400
							}}
						>
							UNIWORKS
						</Link>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>

						<NavBar />

						<ul className="right hide-on-med-and-down">
							<li>
								<Link
									className={`waves-effect ${
										currentLocation === '/auth/login'
											? `waves-light purple darken-3`
											: `waves-purple white`
									} btn`}
									style={
										currentLocation === '/auth/login'
											? { color: 'white', boxShadow: '0' }
											: { color: '#7b1fa2' }
									}
									to="/auth/login"
								>
									Login
								</Link>
							</li>
							<li>
								<Link
									className={`waves-effect ${
										currentLocation === '/auth/register'
											? `waves-light purple darken-3`
											: `waves-purple white`
									} btn`}
									style={
										currentLocation === '/auth/register'
											? { color: 'white', boxShadow: '0' }
											: { color: '#7b1fa2' }
									}
									to="/auth/register"
								>
									Register
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default HeaderNavigation;
