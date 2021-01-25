import React from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_ROUTES } from '../../routes/routes';

import './header.css';

interface IAccBtnProps {
	currentLocation: string;
}

const HeaderAccBtn: React.FC<IAccBtnProps> = ({ currentLocation }) => {
	return (
		<Link
			to={CLIENT_ROUTES.account.href}
			className={`header__account-link header__nav-item mx-10per ${
				currentLocation === CLIENT_ROUTES.account.href && `header__nav-item_activeLink`
			}`}
		>
			Аккаунт
			<i className="material-icons mx-10">account_circle</i>
		</Link>
	);
};

export default HeaderAccBtn;
