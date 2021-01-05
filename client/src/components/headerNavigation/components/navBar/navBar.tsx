import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { headersData } from '../../../../Routes/routes';

const NavBar = () => {
	const currentLocation = useLocation().pathname;

	return (
		<>
			<ul className="left hide-on-med-and-down">
				{headersData.map(({ label, href }) => (
					<li key={`header-${label}-tab`}>
						<Link className={`${currentLocation === href && `purple darken-3`}`} to={href}>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default NavBar;
