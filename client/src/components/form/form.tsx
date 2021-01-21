import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import './form.css';

const inputFields = [
	{
		id: 'email',
		type: 'email',
		placeholder: 'Email'
	},
	{
		id: 'password',
		type: 'password',
		placeholder: 'Password'
	}
];

type PersonScore = {
	email: string;
	password: string;
};

const AuthForm: React.FC = () => {
	const { register, handleSubmit } = useForm<PersonScore>();
	let { formType }: any = ({} = useParams());

	const onSubmit = (data: PersonScore) => {
		console.log('data', data);
	};

	return (
		<div className="form-wrapper">
			<h2>{formType === 'login' ? `Вход в систему` : 'Регистрация'}</h2>
			<Form className="form">
				{formType === 'register' && (
					<Form.Group>
						<Form.Label>Имя</Form.Label>
						<Form.Control type="text" placeholder="Введите имя" />
					</Form.Group>
				)}

				<Form.Group id="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Введите email" />
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group id="formBasicPassword">
					<Form.Label>Пароль</Form.Label>
					<Form.Control type="password" placeholder="Введите пароль" />
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

		// <div className="row form-wrapper">
		// 	<form className="col s6 l12 form" onSubmit={handleSubmit(onSubmit)}>
		// 		<div className="row">
		// 			<h4 className="col s6">{`${formType.slice(0, 1).toUpperCase()}${formType.slice(1)}`}</h4>
		// 		</div>

		// 		{inputFields.map(({ id, type, placeholder }) => {
		// 			return (
		// 				<div className="row" key={`${id}-input`}>
		// 					<div className="input-field col s12">
		// 						<input
		// 							id={id}
		// 							name={id}
		// 							type={type}
		// 							className="validate"
		// 							placeholder={placeholder}
		// 							ref={register({ required: true })}
		// 						/>
		// 					</div>
		// 				</div>
		// 			);
		// 		})}

		// 		<div className="row">
		// 			<button className="btn waves-effect waves-light col s6" type="submit" name="action">
		// 				Submit
		// 				<i className="material-icons right">send</i>
		// 			</button>
		// 		</div>
		// 	</form>
		// </div>
	);
};

export default AuthForm;
