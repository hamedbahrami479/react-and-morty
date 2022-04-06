import "./App.css";
import React, { useEffect, useState } from "react";
import Title from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const loadCharacters = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
      <Title />
      {characters.map((character) => (
        <Card
          key={character.id}
          image={character.image}
          name={character.name}
        />
      ))}
      <NavBar />
    </div>
  );
}

export default App;
