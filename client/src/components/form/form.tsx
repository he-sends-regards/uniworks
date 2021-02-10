import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAuth } from '../../hooks/auth.hook';
import { useHttp } from '../../hooks/http.hook';
import { ActionType, switchAuthStatus } from '../../store/actions';
import { MessageToast } from '../message-toast/message-toast';

import './form.css';

const AuthForm: React.FC<{ authorizationStatus?: 'AUTH' | 'NO_AUTH'; addUser?: any; switchAuthStatus?: any }> = ({
	authorizationStatus,
	addUser,
	switchAuthStatus
}) => {
	if (authorizationStatus === AuthorizationStatus.AUTH) {
		alert('Вы авторизованы');
		return <Redirect to="/account" />;
	}

	const auth = useAuth();

	const { formType } = useParams<{ formType: string }>();
	const { loading, serverError, request } = useHttp();
	const { register, handleSubmit, errors, clearErrors } = useForm();

	const onSubmit = async (formData: { [key: string]: string }) => {
		try {
			const data = await request(`/api/auth/${formType}`, 'POST', formData);

			auth.login(data.token, data.userId, data.userName, data.userMail);
			addUser(data);
			switchAuthStatus();
		} catch (e) {}
	};

	return (
		<div className="form-container">
			{serverError && <MessageToast message={`${serverError}`} />}

			<h2>{formType === 'login' ? `Вход в систему` : 'Регистрация'}</h2>
			<Form className="form" onSubmit={handleSubmit(onSubmit)}>
				{formType === 'register' && (
					<Form.Group>
						<Form.Label htmlFor="name">Имя</Form.Label>
						<Form.Control
							ref={register({ required: true, maxLength: 30, minLength: 2 })}
							type="text"
							id="name"
							name="name"
							aria-invalid={errors.name ? 'true' : 'false'}
							placeholder="Введите имя"
						/>
						{errors.name && errors.name.type === 'required' && <span role="alert">This is required</span>}
						{errors.name && errors.name.type === 'maxLength' && (
							<span role="alert">Max length exceeded</span>
						)}
						{errors.name && errors.name.type === 'minLength' && (
							<span role="alert">Min length exceeded</span>
						)}
					</Form.Group>
				)}

				<Form.Group id="formBasicEmail">
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Control
						ref={register({ required: true })}
						name="email"
						id="email"
						type="email"
						aria-invalid={errors.email ? 'true' : 'false'}
						placeholder="Введите email"
					/>
					{errors.email && errors.email.type === 'required' && <span role="alert">This is required</span>}
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group id="formBasicPassword">
					<Form.Label htmlFor="password">Пароль</Form.Label>
					<Form.Control
						ref={register({ required: true, maxLength: 16, minLength: 7 })}
						name="password"
						id="password"
						type="password"
						placeholder="Введите пароль"
					/>
					{errors.password && errors.password.type === 'required' && (
						<span role="alert">This is required</span>
					)}
					{errors.password && errors.password.type === 'maxLength' && (
						<span role="alert">Max length exceeded</span>
					)}
					{errors.password && errors.password.type === 'minLength' && (
						<span role="alert">Min length exceeded</span>
					)}
				</Form.Group>

				{formType === 'login' && (
					<Form.Group id="formBasicCheckbox">
						<Form.Check type="checkbox" label="Остаться в системе" />
					</Form.Group>
				)}

				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					{loading ? (
						<Spinner animation="grow" />
					) : (
						<Button variant="primary" type="submit">
							Submit
						</Button>
					)}
				</div>
			</Form>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch: any) => ({
	addUser: (data: object) => dispatch({ type: ActionType.REGISTER_USER, payload: data }),
	switchAuthStatus: () => dispatch({ type: ActionType.SWITCH_AUTH_STATUS })
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
