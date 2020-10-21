import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
	console.log( 'Sidebar' );
	return (
		<SidebarWrapper>
			Sidebar with social links
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.div`
	width: 80px;
	height: 100vh;
	position: fixed;
	background: #04070e;
	right: 0;
	top: 0;
	z-index: 100;
`;

export default Sidebar;
