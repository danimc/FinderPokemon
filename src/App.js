import React, { useState, useEffect } from "react";
import "./App.css";
import getPokemon from "./services/getPokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log("aplicando efecto");
    getPokemon('squirtle').then(pokemon => setPokemon(pokemon))

  }, []);

  return (
    <div className="App">
      <h2>Buscador</h2>

      {pokemon.map((foto) => (
        <img src={foto} alt="pokemon" />
      ))}
    </div>
  );
}

export default App;
