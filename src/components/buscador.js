import React, {useState} from "react";
import getPokemon from "../services/getPokemon" 

function Buscador({setPokemon}) {

 const [keyword, setKeyword] = useState('');
  const handleSubmit = event => {
    event.preventDefault();

    getPokemon(keyword)
    .then(pk => {
      setPokemon(pk)
    })
      
   
  };

  const handelChange = evt => {
     setKeyword(evt.target.value)
  }
  

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Pokemon:</label>
        <input onChange={handelChange} type="text" />
      </form>
    </div>
  );
}

export default Buscador;
