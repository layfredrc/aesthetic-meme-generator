import React from "react";
import styled from "styled-components";

const WaveBackground = () => {
	return (
		<Wrapper>
			<Background />
			<Wave
				src='/assets/Wave-blur-top.svg'

			/>
			<Wave
				src='/assets/Wave-yellow.svg'
				style={{ top: "90px" }}
			/>
			<Wave
				src='/assets/Wave-orange.svg'
				style={{ top: "40px" }}
			/>
			<Wave
				src='/assets/Wave-spray.svg'
				style={{ top: "40px" }}
			/>
			<Wave
				src='/assets/Wave-red.svg'
				style={{ top: "345px" }}
			/>
			<Wave
				src='/assets/Wave-white.svg'
				style={{ top: "720px" }}
			/>


		</Wrapper>
	);
};

export default WaveBackground;



const Wrapper = styled.div`
	position: relative;
	
`;

const Wave = styled.img`
	position: absolute;
	z-index: -1;
	width: 100%;
`;



const Background = styled.div`
	background: linear-gradient(180deg, #176ab1 17.01%, #cbd8f1 100%);
	position: absolute;
	width: 100%;
	height: 1000px;
	z-index: -1;
`;
