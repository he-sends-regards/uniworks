import React from 'react';
import { useParams } from 'react-router-dom';

const Form = () => {
	let { formType }: any = ({} = useParams());

	return (
		<div
			className="row"
			style={{
				width: '40%',
				fontFamily: 'Montserrat, sans-serif',
				fontWeight: 200,
				fontStyle: 'italic',
				boxShadow: '0 0 15px black',
				borderRadius: '15px',
				// display: 'flex',
				// alignItems: 'center',
				// justifyContent: 'center',
				color: 'white'
			}}
		>
			<form
				className="col s12 l12"
				style={{
					backgroundColor: 'rgba(123, 31, 162, 0.7)',
					display: 'flex',
					flexDirection: 'column',
					borderRadius: '15px',
					alignItems: 'center'
				}}
			>
				<div className="row">
					<h4 className="col s12">{`${formType.slice(0, 1).toUpperCase()}${formType.slice(1)}`}</h4>
				</div>
				{formType === 'register' && (
					<div className="row">
						<div className="input-field col s12">
							<input
								style={{ color: 'white' }}
								id="name"
								type="text"
								className="validate"
								placeholder="First Name"
							/>
						</div>
					</div>
				)}
				<div className="row">
					<div className="input-field col s12">
						<input
							style={{ color: 'white' }}
							id="email"
							type="email"
							className="validate"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input
							style={{ color: 'white' }}
							id="password"
							type="password"
							className="validate"
							placeholder="Password"
						/>
					</div>
				</div>

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
