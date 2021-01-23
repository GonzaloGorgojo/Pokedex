export const $PAGINADOR = document.querySelector('#paginador')
export async function armarPaginador() {

    let contador = 0;
    let numero = 0;

    for (let i = 0; i < 900; i++) {
        contador++;
        if (contador === 20) {
            numero++
            const $lista = document.createElement('option');
            $lista.textContent = numero;
            $lista.value = (i + 1)
            $PAGINADOR.appendChild($lista)
            contador = 0;
        }
    }

}