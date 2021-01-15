import React, { createRef } from 'react';
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

const Form: React.FC = () => {
	const { register, handleSubmit } = useForm<PersonScore>();
	let { formType }: any = ({} = useParams());

	const onSubmit = (data: PersonScore) => {
		console.log('data', data);
	};

	return (
		<div className="row form-wrapper">
			<form className="col s12 l12 form" onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<h4 className="col s12">{`${formType.slice(0, 1).toUpperCase()}${formType.slice(1)}`}</h4>
				</div>

				{inputFields.map(({ id, type, placeholder }) => {
					return (
						<div className="row" key={`${id}-input`}>
							<div className="input-field col s12">
								<input
									id={id}
									name={id}
									type={type}
									className="validate"
									placeholder={placeholder}
									ref={register({ required: true })}
								/>
							</div>
						</div>
					);
				})}

				<div className="row">
					<button className="btn waves-effect waves-light col s12" type="submit" name="action">
						Submit
						<i className="material-icons right">send</i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
