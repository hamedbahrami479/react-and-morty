import React from "react";
import styled from 'styled-components';

const Title = () => {
  return( <TitleStyles> React and Morty </TitleStyles>
  );
};



const TitleStyles = styled.h1`
height: 75px;
justify-content: center;
margin: 5px; 
border: 3px black solid;
align-items: center;
color: white;
background-color: green
`;
export default Title;
