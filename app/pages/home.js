import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Wrapper from '../util/wrapper/wrapper';

const HomePage = () => {
	const [hasClicked, setHasClicked] = useState( false );

	let variantsChildren = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
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
					Pablo
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

	return (
		<div style={{
			display: 'flex',
			height: '100vh',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '100vh',
			maxHeight: '100vh',
		}}
		>
			<motion.a
				initial="hidden"
				animate="show"
				variants={stagger}
				href="/about"
				onTap={() => onClickHandler()}
			>
				{fontImage.map( item => item )}
			</motion.a>
		</div>
	);
};

export default HomePage;
