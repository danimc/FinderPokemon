function getPokemeon(nombre) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((res) => res.json())
    .then((respuesta) => {
        console.log(respuesta);
      
        return respuesta;
        
    });
}

export default getPokemeon;
