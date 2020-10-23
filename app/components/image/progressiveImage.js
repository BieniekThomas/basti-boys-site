import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const overlayStyles = {
	position: 'absolute',
	filter: 'blur(1px)',
	transition: 'opacity ease-in 1000ms',
	clipPath: 'inset(0)',
};

const ProgressiveImage = ({
	overlaySrc, src, alt = '', className, aspectRatio,
}) => {
	const [highResImageLoaded, setHighResImageLoaded] = useState( false );

	return (
		<Wrapper aspectRatio={aspectRatio}>
			<HighResImageStyled
				onLoad={() => {
					setHighResImageLoaded( true );
				}}
				src={src}
				alt={alt}
			/>
			<LowResImageStyled
				className={`${className} ${overlayStyles}`}
				{...highResImageLoaded && { style: { opacity: '0' } }}
				src={overlaySrc}
				alt={alt}
			/>
		</Wrapper>
	);
};

const HighResImageStyled = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const LowResImageStyled = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(1px);
	transition: opacity ease-in 250ms;
	clip-path: inset(0);
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${props => props.aspectRatio * 100}%;
  line-height: 0;
  height: 0;
`;

ProgressiveImage.propTypes = {
	overlaySrc: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	className: PropTypes.string,
	aspectRatio: PropTypes.number.isRequired,
};

ProgressiveImage.defaultProps = {
	className: '',
	alt: '',
};

export default ProgressiveImage;
