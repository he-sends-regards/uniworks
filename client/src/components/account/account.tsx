import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tab, Row, Col, Nav, Button } from 'react-bootstrap';
import './account.css';
import { AuthorizationStatus } from '../../const';
import { ActionType } from '../../store/actions';

interface IUserData {
	name: string;
	email: string;
	password: string;
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

	const [isPasswordVisible, setPasswordVisible] = useState(false);

	return (
		<div className="account">
			<Tab.Container id="left-tabs-example" defaultActiveKey="n1">
				<Row style={{ width: '100%', alignItems: 'center' }}>
					<Col sm={2} style={{ float: 'none', margin: '0 auto' }}>
						<Nav variant="pills" className="flex-column" style={{ textAlign: 'center' }}>
							<Nav.Item>
								<Nav.Link eventKey="n1">Ваши данные</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="n2">Купленные работы</Nav.Link>
							</Nav.Item>

							<Button
								variant="danger"
								style={{ marginTop: '30px' }}
								onClick={() => {
									logout();
									return <Redirect to="/auth/login" />;
								}}
							>
								Logout
							</Button>
						</Nav>
					</Col>
					<Col
						sm={10}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '1.6rem',
							fontFamily: 'Roboto'
						}}
					>
						<Tab.Content>
							<Tab.Pane eventKey="n1">
								Имя: {currentUser.name}
								<br />
								Email: {currentUser.email}
								<br />
								Пароль: {isPasswordVisible ? currentUser.password : '******'}
								<br />
								<Button variant="warning" onClick={() => setPasswordVisible(!isPasswordVisible)}>
									{`${isPasswordVisible ? 'Скрыть' : 'Показать'} пароль`}
								</Button>
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
