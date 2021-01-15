import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import telegramLogo from './img/telegram.svg';
import instagramLogo from './img/instagram.svg';
import emailLogo from './img/gmail.svg';
import { Container, Navbar } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';

import logo from '../headerNavigation/img/logo.png';

const socials = [
	{
		name: 'telegram',
		href: 'tg://resolve?domain=postscriptum_no',
		src: telegramLogo
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/technicalboy.io/',
		src: instagramLogo
	},
	{
		name: 'email',
		href: 'mailto:postscriptum.no@gmail.com',
		src: emailLogo
	}
];

const Footer = () => {
	const currentLocation = useLocation().pathname;

	return (
		<>
			{currentLocation !== '/rules' && (
				<Navbar expand="lg" variant="light" bg="dark" className="justify-content-between">
					<Navbar.Brand style={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
						<img src={logo} width="80px" />
					</Navbar.Brand>
					<Navbar style={{ fontSize: '1rem', textAlign: 'center', color: 'white', width: '30%' }}>
						Copyright © 2020 UniWorks. All rights are reserved
					</Navbar>
					<Navbar style={{ width: '30%', display: 'flex', justifyContent: 'space-evenly' }}>
						{socials.map(social => (
							<>
								<a
									className="grey-text text-lighten-3 footer-social-logo"
									href={social.href}
									data-tip={`Link to ${social.name}`}
								>
									<img className="social-logo_img" src={social.src} alt={`${social.name} logo`} />
								</a>
								<ReactTooltip />
							</>
						))}
					</Navbar>
				</Navbar>
			)}
		</>
		// <footer className="page-footer purple darken-2">
		// 	{currentLocation !== '/works' && (
		// 		<div className="container">
		// 			<div
		// 				className="row"
		// 				style={{
		// 					display: 'flex',
		// 					alignItems: 'center',
		// 					justifyContent: 'space-between',
		// 					margin: '0'
		// 				}}
		// 			>
		// 				<div className="col l6 s12">
		// 					<h5 className="white-text">
		// 						<img src={logo} width="90" />
		// 					</h5>
		// 				</div>
		// 				<div className="col l4 offset-l2 s12">
		// 					<ul className="socials-list">
		// {socials.map(social => (
		// 	<li key={`${social.name}-logo`}>
		// 		<a className="grey-text text-lighten-3 footer-social-logo" href={social.href}>
		// 			<img
		// 				className="social-logo_img"
		// 				src={social.src}
		// 				alt={`${social.name} logo`}
		// 			/>
		// 		</a>
		// 	</li>
		// ))}
		// 					</ul>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	)}
		// 	<div className="footer-copyright">
		// 		<div className="container" style={{ textAlign: 'center' }}>
		// 			Copyright © 2020 UniWorks. All rights are reserved
		// 		</div>
		// 	</div>
		// </footer>
	);
};

export default Footer;
