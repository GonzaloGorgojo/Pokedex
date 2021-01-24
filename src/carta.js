import * as Listado from './listado.js';
import * as Pokemones from './recursos.js';

const $LISTADO = Listado.$LISTA;
const $IMAGEN_CARTA = document.querySelector('#imagenCarta');
const $NOMBRE_CARTA = document.querySelector('#tituloPokemon');
const $TIPO_POKEMON = document.querySelector('#tipoPokemon');
const $HABILIDAD_POKEMON = document.querySelector('#habilidadPokemon');
const $DATOS_POKEMON = document.querySelector('#datosPokemon');
const $PESO_POKEMON = document.querySelector('#pesoPokemon');
const $ALTURA_POKEMON = document.querySelector('#alturaPokemon');

export const POKEMON_SELECCIONADO = $LISTADO.onclick = obtenerPokemon;

function obtenerPokemon(e) {
    const URL_POKEMON = e.target.href;
    mostrarPokemon(URL_POKEMON)
}

async function mostrarPokemon(URL) {
    let pokemon = await Pokemones.cargarPokemon(URL);

    if (pokemon.sprites.other.dream_world.front_default === null) {
        $IMAGEN_CARTA.src = pokemon.sprites.front_default
    } else {
        $IMAGEN_CARTA.src = pokemon.sprites.other.dream_world.front_default
    }

    $NOMBRE_CARTA.textContent = pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1);;
    obtenerTipos(pokemon);
    obtenerHabilidad(pokemon);
    mostrarDatos(pokemon);
}

function obtenerTipos(pokemon) {
    $TIPO_POKEMON.innerHTML = '';
    $TIPO_POKEMON.textContent = 'Tipo: '
    pokemon.types.forEach(tipo => {
        const $parrafo = document.createElement('p');
        $parrafo.textContent = tipo.type.name;
        $parrafo.style.borderRadius = '50%';
        $parrafo.style.padding = '10px'
        $parrafo.style.margin = '1vh 1vw 1vh 1vw'
        $parrafo.style.backgroundColor = '#BDDCC2'
        $TIPO_POKEMON.appendChild($parrafo)
    });
}

function obtenerHabilidad(pokemon) {
    $HABILIDAD_POKEMON.innerHTML = '';
    $HABILIDAD_POKEMON.innerHTML = 'Habilidades: '
    pokemon.abilities.forEach(habilidad => {

        const $parrafo = document.createElement('p');
        $parrafo.textContent = habilidad.ability.name;
        $parrafo.style.borderRadius = '50%';
        $parrafo.style.padding = '10px'
        $parrafo.style.margin = '1vh 1vw 1vh 1vw'
        $parrafo.style.backgroundColor = '#CCD497'
        $HABILIDAD_POKEMON.appendChild($parrafo)
    });
}

function mostrarDatos(pokemon) {
    $DATOS_POKEMON.style.visibility = 'visible';
    $ALTURA_POKEMON.innerHTML = '';
    $ALTURA_POKEMON.textContent = 'Altura: '
    $PESO_POKEMON.innerHTML = '';
    $PESO_POKEMON.textContent = 'Peso: '

    const $parrafo = document.createElement('p');
    $parrafo.textContent = pokemon.weight + ' Lb';
    $parrafo.style.borderRadius = '50%';
    $parrafo.style.padding = '10px'
    $parrafo.style.margin = '1vh 1vw 1vh 1vw'
    $parrafo.style.backgroundColor = '#DFF6F7'
    $PESO_POKEMON.appendChild($parrafo)

    const $parrafo2 = document.createElement('p');
    $parrafo2.textContent = pokemon.height + ' "';
    $parrafo2.style.borderRadius = '50%';
    $parrafo2.style.padding = '10px'
    $parrafo2.style.margin = '1vh 1vw 1vh 1vw'
    $parrafo2.style.backgroundColor = '#DFF6F7'
    $ALTURA_POKEMON.appendChild($parrafo2)
}

