const APIURL = "https://pokeapi.co/api/v2/pokemon/";

export default function getPokemon(nombre) {
  return fetch(`${APIURL}${nombre}`)
    .then((res) => res.json())
    .then((results) => {
      const { id, sprites, name, weight, types } = results;
      const images = [sprites.back_default, sprites.front_default];
      return {id, images, name, weight};
    });
}
 