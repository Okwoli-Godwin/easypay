import React from "react";
import styled from "styled-components";

interface Iprops {
	title: string;
    content: string;
}

const Card: React.FC<Iprops> = ({ title, content }) => {
	return (
		<Container>
			<CardHold>
				<Title>{title}</Title>
				<Content>
					{content}
				</Content>
			</CardHold>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	width: 100%;
`;

const CardHold = styled.div`
	height: 200px;
	width: 250px;
	border: 1px solid gray;
	margin-top: 100px;
	margin-left: 20px;
	padding: 10px;
	background-color: gray;
	border-radius: 5px;
`;
const Title = styled.h3``;
const Content = styled.p``;