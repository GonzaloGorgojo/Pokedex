export const URL = 'https://pokeapi.co/api/v2/pokemon/';
export const LIMITE_POKEMONES = 20;


export async function cargarPokemon(URL) {
  if (URL === undefined) {
    throw new Error('Se necesita un identificador para cargar un pokemón');
  }
  return (await fetch(`${URL}`)).json();
}

export async function cargarPokemones(offset = 0, limite = LIMITE_POKEMONES) {
  return (await fetch(`${URL}?offset=${offset}&limit=${limite}`)).json();
}
