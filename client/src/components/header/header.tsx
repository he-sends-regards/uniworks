import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { headersData } from '../../Routes/routes';

import './header.css';

interface IAuthBtn {
	[key: string]: string;
}

const authButtons: IAuthBtn[] = [
	{
		title: 'Login',
		variant: 'primary',
		href: '/auth/login'
	},
	{
		title: 'Register',
		variant: 'secondary',
		href: '/auth/register'
	}
];

const Header = () => {
	const currentLocation = useLocation().pathname;

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand href="#home">
				<Link
					to="/"
					style={{
						fontFamily: 'Montserrat, sans-serif',
						fontWeight: 400,
						color: '#fff',
						fontSize: '1.8rem',
						textDecoration: 'none',
						marginRight: '50px'
					}}
				>
					UNIWORKS
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{headersData.map(({ label, href }) => (
						<Nav.Link key={`${label}-nav-element`}>
							<Link to={href} className={`${currentLocation === href && `activeLink`} header-nav__link`}>
								{label}
							</Link>
						</Nav.Link>
					))}
				</Nav>
				<Navbar className="justify-content-between">
					{authButtons.map(authButton => (
						<Link
							to={authButton.href}
							className="header-nav__link mx-10"
							key={`${authButton.title}-btn-element`}
						>
							<Button variant={authButton.variant} disabled={currentLocation === authButton.href}>
								{authButton.title}
							</Button>
						</Link>
					))}
				</Navbar>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
