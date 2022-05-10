import React, { useState, useEffect } from "react";
import "./App.css";
import Pokemon from "./components/pokemon";
import Home from "./pages/Home/home";
import getPokemon from "./services/getPokemon";

function App() {
  return (
    <div className="App">
      <h2>MY POKEDEX</h2>

      <Home />
      
    </div>
  );
}

export default App;
