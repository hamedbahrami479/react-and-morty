import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <ul role="list">
      <CardItem>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Hier muss ein Bild sein"
        />
        <h2> Morty Smith </h2>
      </CardItem>
    </ul>
  );
};

const CardItem = styled.li`
  display: flex;
  align-items: center;
  border: 3px solid black;
  margin: 1rem;
  list-style-type: none;
`;

export default Card;
