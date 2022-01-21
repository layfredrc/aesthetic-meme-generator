import React from "react";
import styled from "styled-components";
import InputText from "./InputText";

export default class MemeGenerator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topText: "",
			bottomText: "",
			randomMemeImage: "http://i.imgflip.com/1bij.jpg",
			allMemeImages: [],
		};
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((res) => {
				const { memes } = res.data;
				console.log(memes);
				this.setState({ allMemeImages: memes });
			});
	}

	handleChange = (event) => {
		console.log(event.target);
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
		const randMemeImg = this.state.allMemeImages[randNum].url;
		this.setState({ randomMemeImage: randMemeImg });
	};

	render() {
		return (
			<Wrapper>
				<Form onSubmit={this.handleSubmit}>
					<InputText
						type='text'
						name='topText'
						onChange={this.handleChange}
						placeholder='Top Text '
						value={this.state.topText}
					/>
					<InputText
						type='text'
						name='bottomText'
						onChange={this.handleChange}
						placeholder='Bottom Text '
						value={this.state.bottomText}
					/>
					<Button>Generate</Button>
				</Form>

				<MemeWrapper>
					<Image src={this.state.randomMemeImage} alt='' />
					<TopText className='top'>{this.state.topText}</TopText>
					<BottomText className='bottom'>{this.state.bottomText}</BottomText>
				</MemeWrapper>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 20%;
	width: 971px;
	height: 1384px;
	background: rgba(15, 14, 71, 0.3);
	border: 0.5px solid rgba(255, 255, 255, 0.2);
	box-sizing: border-box;
	box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(40px);
	/* Note: backdrop-filter has minimal browser support */

	border-radius: 20px;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 5px;
	z-index: 1;
`;

const Form = styled.form`
	display: flex;
	font-family: "Montserrat", sans-serif;
	justify-content: space-evenly;
`;

const Text = styled.h1`
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
	text-transform: uppercase;
	font-size: 3.5rem;
	color: black;
	-webkit-text-fill-color: white; /* Will override color (regardless of order) */
	-webkit-text-stroke-width: 3px;
	-webkit-text-stroke-color: black;
	text-align: center;
`;

const TopText = styled(Text)`
	position: absolute;
	top: 15%;
	z-index: 9999;
	/* text-align: center; */
	left: 20%;
`;
const BottomText = styled(Text)`
	position: absolute;
	bottom: 15%;
	z-index: 9999;
	/* text-align: center; */
	left: 20%;
`;

const Button = styled.button`
	background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
	border: none;
	border-radius: 30px;
	outline: none;
	/* Inside Auto Layout */
	padding: 0px 1rem;
	flex: none;
	order: 5;
	flex-grow: 0;
	margin: 30px 0px;
`;

const MemeWrapper = styled.div`
	position: relative;
	padding: 5%;
`;
