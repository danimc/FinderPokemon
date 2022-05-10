import pokeNames from "../services/avaliablePokemons";


export function findPokemon({keyword}) 
{        return pokeNames.filter((valor) => {
          const keyFilter = keyword.toLowerCase();
          const pokeFilter = valor.toLowerCase();
          return pokeFilter.includes(keyFilter);
        });      
}