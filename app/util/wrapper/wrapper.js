import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';

const styledWrapper = ({ children }) => {
	// Hook to grab window size
	const size = useWindowSize();

	// Ref for parent div and scrolling div
	const app = useRef();
	const scrollContainer = useRef();

	// Configs
	const data = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0,
	};

	// Scrolling
	const skewScrolling = () => {
		// Set Current to the scroll position amount
		data.current = window.scrollY;
		// Set Previous to the scroll previous position
		data.previous += ( data.current - data.previous ) * data.ease;
		// Set rounded to
		data.rounded = Math.round( data.previous * 100 ) / 100;

		// Difference between
		const difference = data.current - data.rounded;
		const acceleration = difference / size.width;
		const velocity = +acceleration;
		const skew = velocity * 7.5;

		// Assign skew and smooth scrolling to the scroll container
		scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

		// loop vai raf
		requestAnimationFrame( () => skewScrolling() );
	};

	// Run scrollrender once page is loaded.
	useEffect( () => {
		requestAnimationFrame( () => skewScrolling() );
	});

	// Set the height of the body to the height of the scrolling div
	const setBodyHeight = () => {
		document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
		}px`;
		console.log( 'document.body.style.height', document.body.style.height );
	};

	// set the height of the body.
	useEffect( () => {
		setBodyHeight();
		console.log( 'size', size );
	}, [size.height]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Wrapper ref={app}>
				<div ref={scrollContainer}>
					{children}
				</div>
			</Wrapper>
		</motion.div>
	);
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  > div {
    max-width: ${props => props.theme.contentWidth};
    width: 100%;
		padding: 80px 160px 30px 80px;
    
    @media(max-width: 790px){
      padding: 60px 15px;
    }
  }
`;

styledWrapper.propTypes = {
	children: PropTypes.node,
};

styledWrapper.defaultProps = {
	children: null,
};

export default styledWrapper;
