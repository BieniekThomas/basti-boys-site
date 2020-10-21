import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import config from '../config';

const HomePage = () => {
	const stagger = {
		hidden: {},
		show: {
			transition: {
				staggerDirection: 1,
				staggerChildren: 0.08,
				delay: 2,
			},
		},
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

	const fillScreenWithFonts = () => {
		const content = [];
		const maxRounds = 30;
		let hidden = {};
		let xFactor = 3;

		let variantsChildren = {
			hidden: { opacity: 0, lineHeight: 0, fontSize: '10vw' },
			show: { opacity: 1, lineHeight: 0.03, fontSize: '12vw' },
		};

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

	return (
		<motion.div
			initial={{ opacity: 0, transition: { delay: 1, delayChildren: 1 } }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 1, delayChildren: 1 } }}
		>
			<motion.div
				initial="hidden"
				animate="show"
				variants={stagger}
				className="container"
			>
				<motion.div
					style={{
						position: 'relative',
						zIndex: 9,
					}}
				>
					<Link to="/about">
						{fontImage}
					</Link>
				</motion.div>
				<motion.div
					variants={variantsYoutube}
					inital="hidden"
					animate="show"
					className="youtube-wrapper-outer"
				>
					<div className="youtube-wrapper-inner">
						<div className="youtube-wrapper">
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
		</motion.div>
	);
};

export default HomePage;
