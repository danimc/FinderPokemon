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
    const val = evt.target.value;

    setKeyword(val);
  };

  const handelSelect = (val) => {
    setKeyword(val);
   
    console.log(val);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Pokemon:</label>

        <Autocomplete
          getItemValue={(val) => val}
          items={pokeNames}
          renderItem={(pokeNames, isHighlighted) => (
            <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
              {pokeNames}
            </div>
          )}
          value={keyword}
          onChange={handelChange}
          onSelect={handelSelect}
        />
      </form>
    </div>
  );
}

export default Buscador;
