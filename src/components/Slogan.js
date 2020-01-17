import React from 'react';

export default function Slogan(props) {
	const { slogan, subSlogan } = props;
	return (
		<div className='slogan-wrapper'>
			<h1>{slogan}</h1>
			<h2>{subSlogan}</h2>
		</div>
	);
}
