import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";

const Body: React.FC = () => {
	return (
		<Container>
			<Card title='hello world' content='Savy Savio is a good a intelligent boy, You cannot beat the reach'/>
			<Card title='Nigeria' content='Do you think you can beat me in react, if you think then lets get started'/>
      		<Card title='Enugu' content='Enugu is one of the biggest city in Nigeria, The coal city state'/>
      		<Card title='Dubai' content="Savio's dream has always been going to the united state of Dubai😂"/>
		</Container>
	);
};

export default Body;

const Container = styled.div`
	display: flex;
	/* height: 100vh;
	width: 100%;
	flex-wrap: wrap; */
`;