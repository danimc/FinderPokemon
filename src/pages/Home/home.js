import React, { useState } from "react";
import Buscador from "../../components/buscador";
import Pokemon from "../../components/pokemon";

export default function Home() {

  const [pokemon, setPokemon] = useState("");

  return (
    <>
      <Buscador setPokemon={setPokemon} />

      {pokemon ? <Pokemon pokemon={pokemon} /> : console.log("no hay")}
    </>
  );
}
