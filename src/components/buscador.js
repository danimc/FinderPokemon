import React from "react";
import getPokemeon from "../services/getPokemon";

function Buscador() {

  const handleSubmit = (event) => {

   const busqueda = document.getElementById('buscador').value
    
   const poke = getPokemeon(busqueda)

   



 

   

    event.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Pokemon:</label>
        <input id="buscador" name="buscador" type="text" />
      </form>
    </div>

    <Pokemon />
  );
}

export default Buscador;
