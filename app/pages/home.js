import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
// import Wrapper from '../util/wrapper/wrapper';
import config from '../config.json';

const HomePage = () => {
	const [hasClicked, setHasClicked] = useState( false );

	let variantsChildren = {
		hidden: { opacity: 0, lineHeight: 0, fontSize: '10vw' },
		show: { opacity: 1, lineHeight: 0.03, fontSize: '12vw' },
	};

	const fillScreenWithFonts = () => {
		const content = [];
		const maxRounds = 30;
		let hidden = {};
		let xFactor = 3;

		for ( let i = 0; i <= maxRounds; i += 1 ) {
			if ( i <= maxRounds / 2 ) {
				hidden = {
					...variantsChildren.hidden,
					x: xFactor += 3,
				};
			} else {
				hidden = {
					...variantsChildren.hidden,
					x: xFactor -= 3,
				};
			}

			variantsChildren = {
				...variantsChildren,
				hidden: {
					...hidden,
				},
			};

			content.push(
				<motion.h1
					initial="hidden"
					animate="show"
					key={i}
					variants={variantsChildren}
				>
					{config.name}
				</motion.h1>,
			);
		}
		return content;
	};

	const fontImage = fillScreenWithFonts();

	const stagger = {
		hidden: {},
		show: {
			transition: {
				staggerDirection: 1,
				staggerChildren: 0.08,
			},
		},
	};

	const onClickHandler = () => {
		console.log( 'clicked' );
		setHasClicked( !hasClicked );
	};

	const variantsYoutube = {
		hidden: {
			opacity: 0,
		},
		show: {
			transition: {
				duration: 2,
			},
			opacity: 0.8,
		},
	};

	return (
		<motion.div
			initial="hidden"
			animate="show"
			variants={stagger}
			onTap={() => onClickHandler()}
			style={{
				display: 'flex',
				height: '100vh',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
				maxHeight: '100vh',
				padding: '80px 30px',
				position: 'relative',
			}}
		>
			<motion.div

				style={{
					position: 'relative',
					zIndex: 9,
				}}
			>
				<Link to="/about">
					{fontImage.map( item => item )}
				</Link>
			</motion.div>
			<motion.div
				variants={variantsYoutube}
				inital="hidden"
				animate="show"
				style={{
					width: '80%',
					height: '80%',
					left: '10%',
					top: '10%',
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					overflow: 'hidden',
				}}
			>
				<div style={{
					position: 'relative',
					width: '100%',
					height: 0,
					paddingTop: '56.25%',
				}}
				>
					<div style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						left: '0',
						top: '0',
						pointerEvents: 'none',
					}}
					>
						<ReactPlayer
							url="https://www.youtube.com/watch?v=RpL9DKwuFkw"
							width="100%"
							height="100%"
							light={false}
							playing
							volume={0}
						/>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default HomePage;
