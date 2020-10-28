import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import IsVisible from 'react-is-visible';
import StyledWrapper from '../util/wrapper/wrapper';
import config from '../config';
import Image from '../components/image/image';


const aboutPage = () => {
	const { pictures } = config;

	const outerVariants = {
		hidden: {
			transition: {
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				staggerChildren: 0.5,
				delay: 0.5,
			},
		},
	};

	const imageVariants = {
		hidden: {
			opacity: 0,
			y: 60,
		},
		show: {
			opacity: 1,
			y: 0,
		},
	};

	const textVariantsOuter = {
		hidden: {
			transition: {
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				staggerDirection: 1,
				staggerChildren: 0.3,
			},
		},
	};

	const textVariants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		show: {
			opacity: 1,
			y: 0,
		},
	};


	return (
		<StyledWrapper>
			<h1>about</h1>
			{
				pictures.map( ( image, index ) => {
					const data = {
						url: image.path,
						alt: image.alt,
						copyright: false,
						dimensions: {
							height: image.height,
							width: image.width,
						},
						loading: {
							url: image.loadUrl,
						},
					};
					return (
						<IsVisible once>
							{isVisible => (
								<Section key={image.path}>
									<motion.div
										animate={isVisible ? 'show' : 'hidden'}
										initial="hidden"
										variants={outerVariants}
										className={index % 2 === 0 ? 'left' : 'right'}
									>
										<motion.div
											animate={isVisible ? 'show' : 'hidden'}
											initial="hidden"
											variants={imageVariants}
										>
											<Image data={data} />
										</motion.div>
										<motion.div
											className="text"
											animate={isVisible ? 'show' : 'hidden'}
											initial="hidden"
											variants={textVariantsOuter}
										>
											<motion.h3
												animate={isVisible ? 'show' : 'hidden'}
												initial="hidden"
												variants={textVariants}
											>
												#
												{index + 1}
											</motion.h3>
											<motion.p
												animate={isVisible ? 'show' : 'hidden'}
												initial="hidden"
												variants={textVariants}
											>
												{
													`Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Iusto nulla totam fugiat dolorum aspernatur repellat, incidunt magni quis officia provident numquam.
										Itaque necessitatibus fugiat voluptas placeat tempore temporibus aperiam quaerat.`
												}

											</motion.p>
										</motion.div>
									</motion.div>
								</Section>
							)}
						</IsVisible>
					);
				})
			}
		</StyledWrapper>
	);
};

const Section = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10vh;

	> div{
		display: flex;
		> *{
			flex-grow: 1;
			padding: 30px;
		}
		> .text {
			max-width: 40%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			h3{
				font-size: 10vw;
			}
		}
	}

	.right{
		display: flex;
		flex-direction: row-reverse;
	}
`;

export default aboutPage;
