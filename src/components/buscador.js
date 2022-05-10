import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { findPokemon } from "../hooks/nameFilter";
import getPokemon from "../services/getPokemon";

export default function Buscador({ setPokemon }) {
  const [keyword, setKeyword] = useState("");
  const dataFilter = findPokemon({keyword})

  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemon(keyword.toLowerCase()).then((pk) => {
      setPokemon(pk);
    });
  };

  const handelChange = (evt) => {
    setKeyword(evt.target.value);
  };


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Pokemon:</label>

        <Autocomplete
          getItemValue={(val) => val}
          items={dataFilter}
          renderItem={(items, isHighlighted) => (
            <div key={items} style={{ background: isHighlighted ? "lightgray" : "white" }}>
              {items}
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


