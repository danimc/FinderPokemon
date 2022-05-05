import React, { useState, useEffect } from "react";
import "./App.css";
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

      <h2>{pokemon.name}</h2>
      {pokemon.images.map((foto) => (
        <img src={foto} alt="pokemon" />
      ))}

      <ul>
        <li>Id Pokemon: {pokemon.id}</li>
        <li>Peso {pokemon.weight} Kg</li>
      </ul>
    </div>
  );
}

export default App;
