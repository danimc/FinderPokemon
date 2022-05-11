import React, { useEffect } from "react";

export default function Recents({ busquedas }) {


    console.log(busquedas);
  return (
    <>
      <h3 className="header-label">Ultimas Busquedas</h3>
      <div className="screen">
        {busquedas.map((name) => (
          <div>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
