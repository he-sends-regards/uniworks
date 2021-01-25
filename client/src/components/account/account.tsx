import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import './account.css';
import { AuthorizationStatus } from '../../const';

interface IAccountProps {
	authorizationStatus?: 'AUTH' | 'NO_AUTH';
}

const Account: React.FC<IAccountProps> = ({ authorizationStatus }) => {
	if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
		alert('Вы не авторизованы');
		return <Redirect to="/" />;
	}

	return <div className="account">hello</div>;
};

const mapStateToProps = (state: any) => ({
	authorizationStatus: state.authorizationStatus
});

export default connect(mapStateToProps)(Account);
