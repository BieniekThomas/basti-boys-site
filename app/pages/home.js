import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Wrapper from '../util/wrapper/wrapper';

const HomePage = () => {
	const [hasClicked, setHasClicked] = useState( false );

	let variantsChildren = {
		hidden: { opacity: 0, color: 'rgba(0,0,0,0.2)' },
		show: { opacity: 1 },
	};

	const fillScreenWithFonts = () => {
		const content = [];
		for ( let i = 0; i < 20; i += 1 ) {
			const show = {
				...variantsChildren.show,
				x: 3 * -i,
			};

			variantsChildren = {
				...variantsChildren,
				show: {
					...show,
				},
			};

			console.log( variantsChildren.show );

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

	const content = fillScreenWithFonts();

	const stagger = {
		hidden: {},
		show: {
			transition: {
				staggerDirection: 1,
				staggerChildren: 0.5,
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
				{content.map( item => item )}
			</motion.a>
		</div>
	);
};

export default HomePage;
