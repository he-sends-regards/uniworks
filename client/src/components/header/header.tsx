import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLIENT_ROUTES } from '../../routes/routes';
import HeaderBtnNav from './header-btn-nav';
import { AuthorizationStatus } from '../../const';

import './header.css';

// ! Написать через константу
interface IHeaderProps {
	authorizationStatus: 'AUTH' | 'NO_AUTH';
}

const Header: React.FC<IHeaderProps> = ({ authorizationStatus }) => {
	const currentLocation = useLocation().pathname;

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand>
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
					{Object.values(CLIENT_ROUTES).map(({ label, href }) => (
						<Nav.Link key={`${label}-nav-element`} disabled={currentLocation === href}>
							<Link to={href} className={`${currentLocation === href && `activeLink`} header-nav__link`}>
								{label}
							</Link>
						</Nav.Link>
					))}
				</Nav>

				{authorizationStatus === AuthorizationStatus.AUTH ? (
					<span>Account</span>
				) : (
					<HeaderBtnNav currentLocation={currentLocation} />
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

const mapStateToProps = (state: any) => ({
	authorizationStatus: state.authorizationStatus
});

export default connect(mapStateToProps)(Header);
