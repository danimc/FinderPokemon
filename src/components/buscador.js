import React from "react";
import getPokemeon from "../services/getPokemon";

function Buscador() {

  const handleSubmit = (event) => {

   const busqueda = document.getElementById('buscador').value
    
    const a = getPokemeon(busqueda) 

    console.log("hola");

    event.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Pokemon:</label>
        <input id="buscador" name="buscador" type="text" />
      </form>
    </div>

  
  );
}

export default Buscador;
