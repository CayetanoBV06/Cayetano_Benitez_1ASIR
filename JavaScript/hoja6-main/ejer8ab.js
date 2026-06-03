// 8A. Crear objeto básico
    const auto = {
        marca: "Toyota",
        modelo: "Corolla"
    };

    // Agregar dinámicamente
    auto.anio = 2022;
    console.log("Año agregado:", auto.anio);

    // 8B. Verificar si existe ANTES de borrarlo
    if ("anio" in auto) {
        console.log("La propiedad 'anio' SÍ existe en el objeto.");
    } else {
        console.log("La propiedad 'anio' NO existe en el objeto.");
    }

    // Eliminar propiedad
    delete auto.anio;
    console.log("Objeto tras el delete:", auto);

    // Verificar si existe DESPUÉS de borrarlo
    if ("anio" in auto) {
        console.log("La propiedad 'anio' SÍ existe en el objeto.");
    } else {
        console.log("La propiedad 'anio' NO existe en el objeto.");
    }