const persona = {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 40
    };

    // --- Forma 1: Usando el bucle clásico 'for...in' (La estándar para objetos) ---
    console.log("--- Forma 1 (for...in) ---");
    for (let clave in persona) {
        console.log(clave + ": " + persona[clave]);
    }

    // --- Forma 2: Usando Object.keys() (Convierte las claves a un array y lo recorre) ---
    console.log("--- Forma 2 (Object.keys) ---");
    let claves = Object.keys(persona);
    for (let i = 0; i < claves.length; i++) {
        let clave = claves[i];
        console.log(clave + ": " + persona[clave]);
    }

    // --- Forma 3: Usando Object.entries() (Saca parejas de [clave, valor] en un array) ---
    console.log("--- Forma 3 (Object.entries) ---");
    let parejas = Object.entries(persona);
    for (let i = 0; i < parejas.length; i++) {
        console.log(parejas[i][0] + ": " + parejas[i][1]);
    }