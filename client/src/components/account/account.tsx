import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tab, Row, Col, Nav, Button } from 'react-bootstrap';
import './account.css';
import { AuthorizationStatus } from '../../const';
import { ActionType } from '../../store/actions';

interface IUserData {
	userName: string;
	userMail: string;
}

interface IAccountProps {
	authorizationStatus?: 'AUTH' | 'NO_AUTH';
	currentUser: IUserData;
	logout?: any;
}

const Account: React.FC<IAccountProps> = ({ authorizationStatus, currentUser, logout }) => {
	if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
		alert('Вы не авторизованы');
		return <Redirect to="/auth/login" />;
	}

	return (
		<div className="account">
			<Tab.Container id="left-tabs-example" defaultActiveKey="n1">
				<Row className="account__tab-nav">
					<Col sm={2} className="account__tab-nav_title">
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="n1">Ваши данные</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="n2">Купленные работы</Nav.Link>
							</Nav.Item>

							<Button
								className="account__tab-nav_logout-btn"
								variant="danger"
								onClick={() => {
									logout();
									return <Redirect to="/auth/login" />;
								}}
							>
								Logout
							</Button>
						</Nav>
					</Col>
					<Col sm={10} className="account__tab-nav_content">
						<Tab.Content>
							<Tab.Pane eventKey="n1">
								Имя: {currentUser.userName}
								<br />
								Email: {currentUser.userMail}
							</Tab.Pane>
						</Tab.Content>
						<Tab.Content>
							<Tab.Pane eventKey="n2">1, 2, 3</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authorizationStatus: state.authorizationStatus,
	currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
	logout: () => dispatch({ type: ActionType.LOGOUT })
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
