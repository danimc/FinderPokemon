import React from "react";

function Pokemon({ pokemon }) {
  const { id, name, images, weight } = pokemon;
  return (
    <>
      <h2 className="pokeName">{name}</h2>

      {images.map((foto) => (
        <img key={foto} src={foto} alt="pokemon" />
      ))}

      <ul className="props">
        <li>
          Id Pokemon: <b>{id}</b>
        </li>
        <li>
          Nombre: <b>{name}</b>
        </li>
        <li>
          Peso <b>{weight} Kg</b>
        </li>
      </ul>
    </>
  );
}

export default React.memo(Pokemon);
