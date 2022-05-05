import React, { useState, useEffect } from "react";
import "./App.css";
import Pokemon from "./components/pokemon";
import getPokemon from "./services/getPokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log("aplicando efecto");
    getPokemon("charmander").then((pokemon) => setPokemon(pokemon));
  }, []);

  return (
    <div className="App">
      <h2>Buscador</h2>
      
      <Pokemon pokemon={pokemon} />
     
    </div>
  );
}

export default App;
