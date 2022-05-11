import React, { useState, useEffect } from "react";
import Buscador from "../../components/buscador";
import Pokemon from "../../components/pokemon";
import Recents from "../../components/recents";

const lastFind = [];

export default function Home() {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    if (lastFind[lastFind.length - 1] === pokemon.name) {
      console.log("iguales");
      return;
    }
    lastFind.push(pokemon.name);
  }, [pokemon]);

  return (
    <>
      <div className="complete">
        <div className="pokedex">
          <div className="camera-simulator"></div>
          <h2 className="header-label">MY POKEDEX</h2>
          <div className="screen">
            {pokemon ? (
              <Pokemon pokemon={pokemon} />
            ) : (
              <p>
                Sin Información,
                <br /> prueba buscando algo :)
              </p>
            )}
          </div>
          <Buscador setPokemon={setPokemon} />
        </div>
        <div className="back">
          <Recents busquedas={lastFind} />
        </div>
      </div>
    </>
  );
}
