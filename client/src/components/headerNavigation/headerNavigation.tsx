import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import logo from './img/logo.png';
import { createBrowserHistory } from 'history';
import { headersData } from '../../Routes/routes';
import './style.css';

const HeaderNavigation = () => {
	const currentLocation = useLocation().pathname;

	return (
		<>
			<header>
				<nav>
					<div className="nav-wrapper purple darken-2 px1">
						<Link to="/" className="brand-logo">
							UniWorks
						</Link>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							{headersData.map(({ label, href }) => (
								<li key={`header-${label}-tab`}>
									<Link className={`${currentLocation === href && `purple darken-3`}`} to={href}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
				<ul className="sidenav" id="mobile-demo">
					{headersData.map(({ label, href }) => (
						<li key={`header-${label}-tab`}>
							<Link className={`${currentLocation === href && `purple darken-3`}`} to={href}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</header>
		</>
	);
};

export default HeaderNavigation;
