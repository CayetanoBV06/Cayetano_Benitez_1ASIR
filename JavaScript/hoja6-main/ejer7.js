const lista = [4, 5, 6, 4, 7, 4, 8, 9, 4];
    let elementoBuscar = 4;

    function contarElemento(array, elemento) {
        let contador = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == elemento) {
                contador++;
            }
        }
        return contador;
    }

    let repeticiones = contarElemento(lista, elementoBuscar);
    document.write("El elemento " + elementoBuscar + " aparece " + repeticiones + " veces.");