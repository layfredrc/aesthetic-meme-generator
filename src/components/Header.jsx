import React from "react";

import styled from "styled-components";

const Header = () => (
	<Wrapper>
		<MemeLogo
			src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
			alt='Problem?'
		/>
		<Title>Meme Generator</Title>
	</Wrapper>
);

export default Header;

const Wrapper = styled.div`
	padding: 3rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 35%;
`;

const MemeLogo = styled.img`
	width: 150px;
	margin-bottom: 1rem;
`;

const Title = styled.h1`
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
	text-transform: uppercase;
	font-size: 3.5rem;
	color: black;
	-webkit-text-fill-color: white; /* Will override color (regardless of order) */
	-webkit-text-stroke-width: 3px;
	-webkit-text-stroke-color: black;
`;
