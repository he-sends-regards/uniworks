import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { StringObjectType } from '../../const';

const authButtons: StringObjectType[] = [
	{
		title: 'Login',
		variant: 'success',
		href: '/auth/login'
	},
	{
		title: 'Register',
		variant: 'primary',
		href: '/auth/register'
	}
];

interface BtnNavProps {
	currentLocation: string;
}

const HeaderBtnNav: React.FC<BtnNavProps> = ({ currentLocation }) => {
	return (
		<Navbar className="justify-content-between">
			{authButtons.map(authButton => (
				<Link to={authButton.href} className="header-nav__link mx-10" key={`${authButton.title}-btn-element`}>
					<Button variant={authButton.variant} disabled={currentLocation === authButton.href}>
						{authButton.title}
					</Button>
				</Link>
			))}
		</Navbar>
	);
};

export default HeaderBtnNav;
