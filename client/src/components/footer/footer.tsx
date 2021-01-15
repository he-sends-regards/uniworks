import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import telegramLogo from './img/telegram.svg';
import instagramLogo from './img/instagram.svg';
import emailLogo from './img/gmail.svg';
import logo from './img/logo.png';

import './footer.css';

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
	);
};

export default Footer;
