import React, { Component } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Slogan from '../components/Slogan';
import Media from '../components/Media';
import Img1 from '../images/media1.png';
import Img2 from '../images/media2.png';
import Img3 from '../images/media3.png';
import Video1 from '../videos/video-tv.m4v';
import Video2 from '../videos/video-devices.m4v';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

export class Main extends Component {
	state = {
		slogans: [
			'Auf Ihrem Ferseher',
			'Serien herunterladen und unterwegs genießen',
			'Auf allen Geräten'
		],
		subSlogans: [
			'Streamen Sie mit Smart-TVs, Playstation, Xbox, Chromecast,Apple TV, Blu-ray-Player u.v.m.',
			'Mit unserer Downloadfunktion können Sie Ihre Lieblingstitel auch offline genießen.',
			'Sie können unbegrenzt Filme und Serien auf Ihrem Smartphone, Tablet,laptop und Fernseher ansehen - ohne Extragebühren.'
		],
		MediaLinks: [Img1, Img2, Img3],
		videoLinks: [Video1, '', Video2]
	};
	render() {
		const { slogans, subSlogans, MediaLinks, videoLinks } = this.state;
		return (
			<div className='main-wrapper'>
				<div className='section-a'>
					<Header />
					<Banner />
				</div>

				<div className='section-b'>
					{slogans.map((each, index) => {
						return (
							<div key={index}>
								<div className='greyBar'></div>
								<div className='showcase'>
									<Slogan
										slogan={each}
										subSlogan={subSlogans[index]}
									/>
									<Media
										mediaLink={MediaLinks[index]}
										videoLink={videoLinks[index]}
									/>
								</div>
							</div>
						);
					})}
				</div>

				<div className='section-c'>
					<div className='greyBar'></div>
					<h1 className='collapse-title'>Häufig gestellte Fragen</h1>
					<Collapse />
					<div className='inputfield'>
						<input type='text' placeholder='E-Mail-Adresse' />
						<button type='submit'>
							30 TAGE KOSTENLOS AUSPROBIEREN
						</button>
					</div>
					<h4>
						Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein,
						um Ihr Konto zu erstellen oder sich einzuloggen.
					</h4>
				</div>

				<div className='section-d'>
					<div className='greyBar'></div>

					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
