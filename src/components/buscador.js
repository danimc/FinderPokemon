import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import pokeNames from "../services/avaliablePokemons";
import getPokemon from "../services/getPokemon";

function Buscador({ setPokemon }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    getPokemon(keyword.toLowerCase()).then((pk) => {
      setPokemon(pk);
    });
 
  };

  const handelChange = (evt) => {
    setKeyword(evt.target.value);
  };


  const filtro = () => {
    return pokeNames.filter((valor) => {
      const keyFilter = keyword.toLowerCase();
      const pokeFilter = valor.toLowerCase();
      return pokeFilter.includes(keyFilter);
    });
  };


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Pokemon:</label>

        <Autocomplete
          getItemValue={(val) => val}
          items={filtro()}
          renderItem={(pokeNames, isHighlighted) => (
            <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
              {pokeNames}
            </div>
          )}
          value={keyword}
          onChange={handelChange}
          onSelect={(value) => setKeyword(value)}
        />
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default Buscador;
