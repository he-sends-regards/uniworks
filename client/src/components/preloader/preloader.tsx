import React from 'react';

import logo from '../headerNavigation/img/logo.png';

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
			<img src={logo} style={{ width: '100px', filter: 'invert()' }} />
			<div className="preloader-wrapper big active">
				<div className="spinner-layer spinner-blue-only" style={{ borderColor: 'black' }}>
					<div className="circle-clipper left">
						<div className="circle"></div>
					</div>
					<div className="gap-patch">
						<div className="circle"></div>
					</div>
					<div className="circle-clipper right">
						<div className="circle"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
