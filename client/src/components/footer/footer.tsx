import React from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './style.css';
import telegramLogo from './img/telegram.svg';
import instLogo from './img/instagram.svg';
import mailLogo from './img/gmail.svg';

import logo from '../headerNavigation/img/logo.png';

const Footer = () => {
	return (
		<footer className="page-footer purple darken-2">
			<div className="container">
				<div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<div className="col l6 s12">
						<h5 className="white-text">
							<img src={logo} width="90" />
						</h5>
					</div>
					<div className="col l4 offset-l2 s12">
						<ul
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-evenly'
							}}
						>
							<li>
								<a className="grey-text text-lighten-3" href="tg://resolve?domain=postscriptum_no">
									<img
										style={{ filter: 'invert()' }}
										src={telegramLogo}
										width="50px"
										alt="telegram logo"
									/>
								</a>
							</li>
							<li>
								<a
									className="grey-text text-lighten-3"
									href="https://www.instagram.com/technicalboy.io/"
								>
									<img
										style={{ filter: 'invert()' }}
										src={instLogo}
										alt="instagram logo"
										width="50px"
									/>
								</a>
							</li>
							<li>
								<a className="grey-text text-lighten-3" href="mailto:postscriptum.no@gmail.com">
									<img
										style={{ filter: 'invert()' }}
										src={mailLogo}
										alt="instagram logo"
										width="50px"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container" style={{ textAlign: 'center' }}>
					© 2020 UniWorks
					{/* <a className="grey-text text-lighten-4 right" href="#!">
						More Links
					</a> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
