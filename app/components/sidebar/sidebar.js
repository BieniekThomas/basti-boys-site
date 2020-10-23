import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
	console.log( 'Sidebar' );
	return (
		<SidebarWrapper>
			<a href="" target="_blank">Insta</a>
			<a href="" target="_blank">Facebook</a>
			<a href="" target="_blank">Bandcamp</a>
			<a href="" target="_blank">Spotify</a>
		</SidebarWrapper>
	);
};

const SidebarWrapper = styled.div`
	width: 80px;
	height: 100vh;
	position: fixed;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	right: 0;
	top: 0;
	z-index: 100;
`;

export default Sidebar;
