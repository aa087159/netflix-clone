import React, { Component } from 'react';

export class Banner extends Component {
	render() {
		return (
			<div className='content-wrapper'>
				<div className='banner-slogan'>
					<h1>
						Unbegrenzt Filme, Serien
						<br /> und mehr
					</h1>
					<h3>
						Genießen Sie Netflix, wo immer Sie möchten.
						<br />
						Jederzeit kündbar.
					</h3>
				</div>

				<input type='text' placeholder='E-Mail-Adresse' />
				<button type='submit'>30 TAGE KOSTENLOS AUSPROBIEREN</button>

				<h4>
					Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um
					Ihr Konto zu erstellen oder sich einzuloggen.
				</h4>
			</div>
		);
	}
}

export default Banner;
