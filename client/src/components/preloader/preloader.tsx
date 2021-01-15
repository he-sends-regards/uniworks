import React from 'react';
import { Spinner } from 'react-bootstrap';

import logo from '../footer/img/logo.png';

const Preloader: React.FC = () => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<img src={logo} style={{ width: '150px', filter: 'invert()' }} />
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
	);
};

export default Preloader;
