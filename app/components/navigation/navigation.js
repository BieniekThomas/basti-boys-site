import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AudioPlayer from 'react-h5-audio-player';
import config from '../../config';
import 'react-h5-audio-player/src/styles.scss'; // Use SASS

const Player = (
	<AudioPlayer
		autoPlay
		src="./Wo sind wir V3 ohne FX.mp3"
		onPlay={e => console.log( 'onPlay' )}
	/>
);

const Navigation = () => {
	const [open, setOpen] = useState( false );

	const hamburgerOverlay = {
		hidden: {
			y: '-100vh',
			width: '100vw',
			height: '100vh',
			transition: {
				duration: 0.2,
				staggerDirection: -1,
				staggerChildren: 0.05,
				delay: 0.5,
			},
		},
		show: {
			y: 0,
			transition: {
				duration: 0.3,
				staggerDirection: 1,
				staggerChildren: 0.05,
				delayChildren: 0.25,
			},
		},
	};

	const staggerChildren = {
		hidden: {
			transition: {
				staggerDirection: -1,
				staggerChildren: 0.15,
			},
		},
		show: {
			transition: {
				staggerDirection: 1,
			},
		},
	};

	const links = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		show: {
			opacity: 1,
			y: 0,
		},
		onHover: {
			scale: 1.2,
		},
	};

	const handleAnimateState = () => {
		if ( open ) {
			return 'show';
		}
		return 'hidden';
	};

	return (
		<>
			<PlayerWrapper>
				{Player}
			</PlayerWrapper>
			<motion.div animate={handleAnimateState()} initial="hidden" variants={staggerChildren}>
				{/* <motion.div initial="hidden" animate={handleAnimateState()} variants={overlayVariants}>
					<Overlay />
				</motion.div> */}
				<Nav>
					<NavWrapper>
						<div
							className="hamburger border"
							onClick={() => setOpen( !open )}
							role="button"
						>
							o
						</div>
					</NavWrapper>
					<motion.div className="hamburger-content" initial="hidden" animate={handleAnimateState()} variants={hamburgerOverlay}>
						<motion.div style={{
							width: '100%',
						}}
						>
							<div className="closeButtonWrapper">
								<motion.div animate={handleAnimateState()} initial="hidden" variants={links}>
									<div
										className="closeButton"
										onClick={() => setOpen( false )}
										role="button"
									>
										X
									</div>
								</motion.div>
							</div>
							<div className="wrapper">
								{config.navigation.map( item => (
									<motion.div key={item.name} whileHover="onHover" animate={handleAnimateState()} initial="hidden" variants={links}>
										<Link to={item.path} onClick={() => setOpen( false )}><h3>{item.name}</h3></Link>
									</motion.div>
								) )}
							</div>
						</motion.div>
					</motion.div>
				</Nav>
			</motion.div>
		</>
	);
};

const PlayerWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 20%;
	min-width: 350px;
	z-index: 999;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
	z-index: 99;
	/* background: #04070e; */

  .hamburger-content{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #04070e;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .closeButtonWrapper{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50px;

      .closeButton{
        width: 50px;
        height: 50px;
        border: 2px solid #a486ff;
        cursor: pointer;
        text-align: center;
        line-height: 50px;
      }
    }

    

    .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      max-width: 400px;
      margin: 0 auto;

      a{
        width: 100%;
        display: inline-block;
        text-align: left;
        font-size: 30px;
        margin-bottom: 5px;
        line-height: 1;
      }
    }
  }
`;

// const Overlay = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   z-index: 20;
//   background: rgba(0,0,0,0.8);
// `;

const NavWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

   .hamburger{
    height: 50px;
		width: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 50px;
    position: relative;
    cursor: pointer;

    .line {
			width: 80%;
			left: 10%;
      height: 2px;
      background-color: #a486ff;
      position: absolute;
      top: 10px;

      &:nth-child(2){
        top: 21px;
      }

      &:last-child{
        top: auto;
        bottom: 12px;
      }
    }
  }
`;

export default Navigation;
