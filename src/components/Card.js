import React from "react";

const Card = () => {
  return (
    <div>
    <CardItem>
      <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Hier muss ein Bild sein" />
      <h2> Morty Smith </h2>
    </CardItem>
    </div>
  );
};


const CardItem = styled.li`

display: flex;
align-items: center;
border: 3px sold black;
margin: 1em;
list-style-type: none;
`;



export default Card;
