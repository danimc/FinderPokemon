import React from "react";

export default function Pokemon({ pokemon }) {
  const { id, name, images, weight } = pokemon;

  return (
    <>
      <h2>{name}</h2>

      {images.map((foto) => (
        <img key={foto} src={foto} alt="pokemon" />
      ))}

      <ul>
        <li>Id Pokemon: {id}</li>
        <li>Peso {weight} Kg</li>
      </ul>
    </>
  );
}
