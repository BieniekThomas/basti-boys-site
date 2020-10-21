import React from 'react';
import { motion } from 'framer-motion';

const aboutPage = () => {
	console.log( 'impressum' );
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<h1>Impressum</h1>
		</motion.div>
	);
};

export default aboutPage;
