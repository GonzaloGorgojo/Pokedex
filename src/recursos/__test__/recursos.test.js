import { URL, cargarPokemon, cargarPokemones } from '../recursos.js';

beforeEach(() => {
    global.fetch = jest.fn();
});

test('cargar 1 pokemon sin Url da error', () => {
    expect(cargarPokemon())
        .rejects
        .toEqual(new Error('Se necesita un identificador para cargar un pokemón'));

});

test('carga listado de pokemones con parametros definidos por el usuario', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
            r([]);
        });
        resolve({ json: () => jsonPromise });
    }));

    cargarPokemones(0, 15);

    expect(global.fetch)
        .toHaveBeenCalledTimes(1);
    expect(global.fetch)
        .toHaveBeenCalledWith(`${URL}?offset=0&limit=${15}`);


});