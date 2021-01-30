import { armarPaginador } from './paginacion/paginacion.js';
import { mostrarListaPokemons } from './listado/listado.js';
import { POKEMON_SELECCIONADO } from './carta/carta.js';



function inicializar() {
    armarPaginador();
    POKEMON_SELECCIONADO;
    mostrarListaPokemons()
}

inicializar();