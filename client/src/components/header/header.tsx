import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLIENT_ROUTES } from '../../routes/routes';
import HeaderBtnNav from './header-btn-nav';
import HeaderAccBtn from './header-acc-btn';
import { AuthorizationStatus } from '../../const';

import './header.css';
import { ActionType } from '../../store/actions';

// ! Написать через константу
interface IHeaderProps {
	authorizationStatus: 'AUTH' | 'NO_AUTH';
	switchAuthStatus?: any;
	registerUser?: any;
	logout?: any;
}

// ! Mock user
const MockUser = {
	name: 'Иван',
	email: 'postscriptum.no@gmail.com',
	password: 'password123'
};

const Header: React.FC<IHeaderProps> = ({ authorizationStatus, switchAuthStatus, registerUser, logout }) => {
	const currentLocation = useLocation().pathname;

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Navbar.Brand>
				<Link className="header__logo" to="/">
					UNIWORKS
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					{Object.values(CLIENT_ROUTES).map(({ label, href }) => {
						if (href === CLIENT_ROUTES.auth.href || href === CLIENT_ROUTES.account.href) {
							return;
						}

						return (
							<Link
								key={`${label}-nav-element`}
								to={href}
								className={`${
									currentLocation === href && `header__nav-item_activeLink`
								} header__nav-item`}
							>
								{label}
							</Link>
						);
					})}
				</Nav>

				{/* Временная кнопка смены статуса авторизации для разработки */}
				<Button
					variant="danger"
					onClick={() => {
						switchAuthStatus();
						authorizationStatus === AuthorizationStatus.AUTH ? logout() : registerUser(MockUser);
					}}
					style={{ fontSize: '12px' }}
				>
					Сменить статус авторизации на{' '}
					{authorizationStatus === AuthorizationStatus.AUTH
						? AuthorizationStatus.NO_AUTH
						: AuthorizationStatus.AUTH}
					(dev)
				</Button>

				{authorizationStatus === AuthorizationStatus.AUTH ? (
					<HeaderAccBtn currentLocation={currentLocation} />
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

const mapDispatchToProps = (dispatch: any) => ({
	switchAuthStatus: () => dispatch({ type: ActionType.SWITCH_AUTH_STATUS }),
	registerUser: (userData: any) => dispatch({ type: ActionType.REGISTER_USER, payload: userData }),
	logout: () => dispatch({ type: ActionType.LOGOUT })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
