import React from 'react';
import { motion } from 'framer-motion';

const aboutPage = () => (
	<motion.div
		initial={{ opacity: 0 }}
		exit={{ opacity: 0 }}
		animate={{ opacity: 1 }}
	>
		<h1>about</h1>
	</motion.div>
);

export default aboutPage;
