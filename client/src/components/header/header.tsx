import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { headersData } from '../../Routes/routes';

import './header.css';

const linkStyle = { color: '#fff', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 };

const HeaderNavigation = () => {
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
							<Link to={href} style={linkStyle} className={`${currentLocation === href && `activeLink`}`}>
								{label}
							</Link>
						</Nav.Link>
					))}
				</Nav>
				<Navbar className="justify-content-between" style={{ width: '18%' }}>
					<Button variant="primary">
						<Link style={linkStyle} to="/auth/login">
							Login
						</Link>
					</Button>
					<Button variant="secondary">
						<Link style={linkStyle} to="/auth/register">
							Register
						</Link>
					</Button>
				</Navbar>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default HeaderNavigation;
