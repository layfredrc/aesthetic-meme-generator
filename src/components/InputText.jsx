import React from "react";
import styled from "styled-components";
const InputText = ({ handleChange, placeholder, ...otherProps }) => (
	<div>
		<InputStyles
			type='text'
			className='text'
			onChange={handleChange}
			{...otherProps}
			placeholder={placeholder}
		/>
	</div>
);

export default InputText;

const InputStyles = styled.input`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;

	position: static;
	width: 204px;
	height: 44px;
	right: 116px;
	top: 0px;

	background: linear-gradient(
		180deg,
		rgba(99, 106, 150, 0.4) 0%,
		rgba(182, 186, 214, 0.25) 100%
	);
	border: 0.5px solid rgba(255, 255, 255, 0);
	box-sizing: border-box;
	box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(40px);
	/* Note: backdrop-filter has minimal browser support */

	border-radius: 30px;
	color: white;
	/* Inside Auto Layout */

	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 30px 0px;
	outline: none;
	font-family: "Montserrat", sans-serif;

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: white;
		opacity: 0.7; /* Firefox */
		font-family: "Montserrat", sans-serif;
	}
`;
