import React, { useEffect, useState } from 'react';
import logo from '../components/Netflix_Logo.png';
import './Nav.css';

const Nav = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img className='nav__logo' src={logo} alt='Netflix Logo' />
		</div>
	);
};

export default Nav;
