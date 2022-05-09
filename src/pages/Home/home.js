import React, { useState, useEffect } from "react";
import Buscador from "../../components/buscador";
import Pokemon from "../../components/pokemon";

export default function Home() {
  //const [keyword, setKeyword] = useState('');
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    console.log("nuevo Pokemon");
    console.log(pokemon);
  }, [pokemon]);



  return (
    <>
      <Buscador setPokemon={setPokemon} />

      <Pokemon pokemon={pokemon}/>
    </>
  );
}
