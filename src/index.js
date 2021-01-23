import { armarPaginador } from './paginacion.js';
import { mostrarListaPokemons } from './listado.js';
import { POKEMON_SELECCIONADO } from './carta.js';



function inicializar() {
    armarPaginador();
    POKEMON_SELECCIONADO;
    mostrarListaPokemons()
}

inicializar();