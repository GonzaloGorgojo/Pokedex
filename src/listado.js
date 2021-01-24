import * as Pokemones from './recursos.js';
import { $PAGINADOR } from './paginacion.js';

$PAGINADOR.onchange = obtenerOffset;

function obtenerOffset(e) {
    const numeroOffset = e.target.value - 20;
    mostrarListaPokemons(numeroOffset)
}

export const $LISTA = document.querySelector('#list-tab');


export async function mostrarListaPokemons(numeroOffset) {
    $LISTA.innerHTML = '';
    let listado = await Pokemones.cargarPokemones(numeroOffset)
    listado = listado.results

    for (let i = 0; i < listado.length; i++) {
        const $link = document.createElement('a');
        $link.classList = 'list-group-item list-group-item-action';
        $link.dataset.toggle = 'list'
        $link.setAttribute("href", listado[i].url)
        $link.textContent = listado[i].name.charAt(0).toUpperCase() + listado[i].name.slice(1);
        $LISTA.appendChild($link);
    }
}



