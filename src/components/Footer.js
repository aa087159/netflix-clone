import React, { Component } from 'react';

export class Footer extends Component {
	state = {
		texts: [
			[
				'Häufig gestellte Fragen (FAQ)',
				'Anlegerbeziehungen',
				'So können Sie Netflix ansehen',
				'Impressum',
				'Netflix Originale'
			],
			['Hilfe-Center', 'Karriere', 'Nutzungsbedingungen', 'Kontakt'],
			[
				'Konto',
				'Geschenkkarten einlösen',
				'Datenschutz',
				'Geschwindigkeitstest'
			],
			[
				'Medien-Center',
				'Geschenkkarten kaufen',
				'Cookie-Einstellungen',
				'Rechtliche Hinweise'
			]
		]
	};
	render() {
		const { texts } = this.state;
		return (
			<div className='footer-main-wrapper'>
				<h5>Fragen? Einfach anrufen: 0800-724-0963</h5>
				<div className='footer-content-wrapper'>
					{texts.map((each, index) => {
						return (
							<div className='footer-group' key={index}>
								{each.map((text, index) => {
									return (
										<a href='/' key={index}>
											{text}
										</a>
									);
								})}
							</div>
						);
					})}
				</div>
				<div className='select-pseudo'>
					<select data-uia='language-picker'>
						<option>Deutsch</option>
						<option>English</option>
					</select>
				</div>
				<p>Netflix Deutschland</p>
			</div>
		);
	}
}

export default Footer;
