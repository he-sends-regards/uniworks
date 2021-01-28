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
				<Navbar expand="lg" className="justify-content-between" variant="light" bg="dark">
					<div className="footer__logo_container">
						<img className="footer__logo" src={logo} />
					</div>

					<span className="footer__copyright_text">Copyright © 2020 UniWorks. All rights are reserved</span>

					<nav className="footer__socials">
						{socials.map(social => (
							<div key={`${social.name}-link`}>
								<a className="socials__item" href={social.href} data-tip={`Link to ${social.name}`}>
									<img className="socials__item_img" src={social.src} alt={`${social.name} logo`} />
								</a>
								<ReactTooltip />
							</div>
						))}
					</nav>
				</Navbar>
			)}
		</>
	);
};

export default Footer;
