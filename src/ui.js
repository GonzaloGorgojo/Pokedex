import * as Pokemones from './recursos.js';

const $LISTA = document.querySelector('#list-tab');


export async function mostrarListaPokemons() {
    let listado = await Pokemones.cargarPokemones()
    listado = listado.results

    for (let i = 0; i < listado.length; i++) {
        const $link = document.createElement('a');
        $link.classList = 'list-group-item list-group-item-action';
        $link.dataset.toggle = 'list'
        $link.textContent = listado[i].name;
        $LISTA.appendChild($link);
    }
}