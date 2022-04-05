import "./App.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <NavBar />
    </div>
  );
}

export default App;
