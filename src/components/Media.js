import React from 'react';

export default function Media({ mediaLink, videoLink }) {
	return (
		<div className='media-wrapper '>
			<img src={mediaLink} alt='' />
			<video autoPlay loop>
				<source src={videoLink} type='video/mp4'></source>
			</video>
		</div>
	);
}
