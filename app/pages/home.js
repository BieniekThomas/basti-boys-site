import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Wrapper from '../util/wrapper/wrapper';

const HomePage = () => {
	const [hasClicked, setHasClicked] = useState( false );

	let variantsChildren = {
		hidden: { opacity: 0, x: -100 },
		show: { opacity: 1, x: 0 },
	};

	const fillScreenWithFonts = () => {
		const content = [];
		for ( let i = 0; i < 5; i += 1 ) {
			const show = {
				opacity: 1,
				x: 3 * -i,
			};
			variantsChildren = {
				...variantsChildren,
				show: {
					...show,
				},
			};
			content.push(
				<motion.h1
					initial="hidden"
					animate="visible"
					key={i}
					variants={variantsChildren}
				>
					KLIPPING
				</motion.h1>,
			);
		}
		return content;
	};

	const content = fillScreenWithFonts();

	const stagger = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			scale: hasClicked ? 500 : 1,
			transition: {
				delayChildren: 0.8,
				staggerDirection: 1,
			},
		},
	};

	const onClickHandler = () => {
		console.log( 'clicked' );
		setHasClicked( true );
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
			<motion.div
				initial="hidden"
				animate="show"
				variants={stagger}
				href="/about"
				onTap={() => onClickHandler()}
				whileHover={{
					scale: 1.2,
					transition: { duration: 1 },
				}}
				drag
				dragConstraints={{
					left: -50, right: 50, top: 50, bottom: 50,
				}}
			>
				{content.map( item => item )}
			</motion.div>
		</div>
	);
};

export default HomePage;
