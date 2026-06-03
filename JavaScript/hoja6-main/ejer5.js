    // Guardamos los datos en un array de objetos con formato dia-nombre
    const turnos = [
        { dia: "lunes", nombre: "María" },
        { dia: "martes", nombre: "Luis" },
        { dia: "miércoles", nombre: "Antonia" },
        { dia: "jueves", nombre: "Pedro" },
        { dia: "viernes", nombre: "Marisa" }
    ];

    function servicio(diaBuscar) {
        // Pasamos el texto a minúsculas por si el usuario escribe 'Lunes' o 'MIÉRCOLES'
        let diaMin = diaBuscar.toLowerCase();
        let encontrado = "";

        for (let i = 0; i < turnos.length; i++) {
            if (turnos[i].dia == diaMin) {
                encontrado = turnos[i].nombre;
            }
        }

        if (encontrado != "") {
            document.write("<p>Este día se encarga " + encontrado + "</p>");
        } else {
            document.write("<p>No hay servicio el día " + diaBuscar + "</p>");
        }
    }

    // Pruebas de ejecución
    servicio("Lunes");
    servicio("Miércoles");
    servicio("Domingo");
