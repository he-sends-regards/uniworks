import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

import './form.css';

interface IRefRegTypes {
	[key: string]: string;
}

interface IAuthFormProps {
	authorizationStatus?: 'AUTH' | 'NO_AUTH';
}

interface UrlParamTypes {
	formType: string;
}

type FormDataTypes = {
	[key: string]: string;
};

const AuthForm: React.FC<IAuthFormProps> = ({ authorizationStatus }) => {
	if (authorizationStatus === AuthorizationStatus.AUTH) {
		alert('Вы уже авторизованы');
		return <Redirect to="/account" />;
	}

	const { formType } = useParams<UrlParamTypes>();
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data: FormDataTypes) => console.log(data);

	return (
		<div className="form-container">
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

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authorizationStatus: state.authorizationStatus
});

export default connect(mapStateToProps)(AuthForm);

const refRegisterAlerts: IRefRegTypes = {
	required: 'This is required',
	minLength: 'Min length exceeded',
	maxLength: 'Max length exceeded'
};

// const inputFields = [
// 	{
// 		formGroupId: '',
// 		id: 'name',
// 		name: 'name',
// 		type: 'name',
// 		label: 'Имя',
// 		placeholder: 'Введите имя',
// 		refRegister: { required: true, maxLength: 30, minLength: 2 }
// 	},
// 	{
// 		formGroupId: 'formBasicEmail',
// 		id: 'email',
// 		name: 'email',
// 		type: 'email',
// 		label: 'Email',
// 		placeholder: 'Введите еmail',
// 		refRegister: { required: true }
// 	},
// 	{
// 		formGroupId: 'formBasicPassword',
// 		id: 'password',
// 		name: 'password',
// 		type: 'password',
// 		label: 'Пароль',
// 		placeholder: 'Введите пароль',
// 		refRegister: { required: true, maxLength: 16, minLength: 7 }
// 	}
// ];

{
	/* {inputFields.map(inputField => {
						if (formType === 'login' && inputField.name === 'name') {
							return;
						}

						return (
							<Form.Group id={inputField.formGroupId}>
								<Form.Label htmlFor={inputField.id}>{inputField.label}</Form.Label>
								<Form.Control
									ref={register(inputField.refRegister)}
									type={inputField.type}
									id={inputField.id}
									name={inputField.name}
									aria-invalid={errors[inputField.name] ? 'true' : 'false'}
									placeholder={inputField.placeholder}
								/>

								{Object.entries(inputField.refRegister).map(([key, value]) => {
									console.log(errors[inputField.name] && errors[inputField.name].type === value);

									return (
										errors[inputField.name] &&
										errors[inputField.name].type === value && (
											<span role="alert" style={{ color: 'black' }}>
												{refRegisterAlerts[key]}
											</span>
										)
									);
								})}
							</Form.Group>
						);
					})} */
}
