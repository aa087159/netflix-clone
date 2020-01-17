import React from 'react';
import { ReactComponent as HeaderSvg } from '../svg/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='header-wrapper'>
			<HeaderSvg className='MainSVG' />
			<Link to='/' className='login-button'>
				<button>Einloggen</button>
			</Link>
		</div>
	);
}
