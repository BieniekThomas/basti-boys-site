import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import VisibilitySensor from 'react-visibility-sensor';
import ProgressiveImage from './progressiveImage';

const Image = ({ data, showCredits, openInModal }) => {
	const {
		url, alt, copyright, dimensions,
	} = data;

	console.log( url, alt );

	const loadingUrl = data.loading ? data.loading.url : url;
	const aspectRatio = dimensions.height / dimensions.width;
	// console.log( 'aspectRatio', aspectRatio );

	let modalWrap = null;
	if ( openInModal ) {
		modalWrap = (
			<div onClick={() => openInModal( data )} className="willOpenInModal">
				<ProgressiveImage src={url} alt={alt} overlaySrc={loadingUrl} aspectRatio={aspectRatio} />
			</div>
		);
	} else {
		modalWrap = (
			<div>
				<ProgressiveImage src={url} alt={alt} overlaySrc={loadingUrl} aspectRatio={aspectRatio} />
			</div>
		);
	}

	return (
	// <VisibilitySensor onChange={onChange}>
		<StyledImage>
			{modalWrap}
			{showCredits
				? <p className="copyright">{`© ${copyright}`}</p>
				: null
			}
		</StyledImage>
	// </VisibilitySensor>
	);
};

const StyledImage = styled.div`
	max-width: 100%;
  img {
		max-width: 100%;
		&:hover {
			opacity: 0.7;
		}
  }
  .copyright {
		max-width: 100%;
	}
	.willOpenInModal{
		&:hover {
			cursor: pointer;
		}
	}
`;

Image.defaultProps = {
	data: {
		url: '',
		alt: '',
		copyright: '',
		dimensions: {},
	},
	showCredits: true,
	openInModal: null,
};

Image.propTypes = {
	data: PropTypes.objectOf( PropTypes.any ),
	showCredits: PropTypes.bool,
	openInModal: PropTypes.func,
};

export default Image;
