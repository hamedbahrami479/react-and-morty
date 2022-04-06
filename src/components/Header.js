import React from "react";

const Header = () => {
  return (
    <div>
      <HeaderStyles> React and Morty </HeaderStyles>
    </div>
  );
};



const HeaderStyles = styles.h1`

height: 75px;
justify-content: cebter;
margin: 5px 5px 5px 5px; 
border: 3 px black solid;
align-item: center;
color: white;
background-color: green
`;


export default Header;




