    const valores = [1, 2, 3, 2, 4, 1, 5, 3, 6];

    function eliminarDuplicados(arrayOriginal) {
        let arrayLimpio = [];

        for (let i = 0; i < arrayOriginal.length; i++) {
            let sw = 0; // Interruptor para saber si ya existe

            // Comprobamos si el elemento ya se encuentra en el nuevo array
            for (let j = 0; j < arrayLimpio.length; j++) {
                if (arrayOriginal[i] == arrayLimpio[j]) {
                    sw = 1; // Ya existe, lo marcamos
                }
            }

            // Si el interruptor sigue en 0, lo añadimos de forma manual usando la longitud
            if (sw == 0) {
                arrayLimpio[arrayLimpio.length] = arrayOriginal[i];
            }
        }
        return arrayLimpio;
    }

    document.write("Array sin duplicados: [" + eliminarDuplicados(valores) + "]");
