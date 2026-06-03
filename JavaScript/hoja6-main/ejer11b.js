// Un JSON que contiene un array con 3 objetos alumnos
    const alumnosJSON = '[{"nombre":"Ana","edad":25,"cursos":["Historia"]},{"nombre":"Luis","edad":19,"cursos":["Matemáticas"]},{"nombre":"Carlos","edad":22,"cursos":["Física"]}]';

    // Convertimos a array de objetos
    const listaAlumnosObj = JSON.parse(alumnosJSON);

    // Recorremos el array principal con un bucle clásico
    for (let i = 0; i < listaAlumnosObj.length; i++) {
        document.write("<strong>--- ALUMNO " + (i + 1) + " ---</strong><br>");
        document.write("Nombre: " + listaAlumnosObj[i].nombre + "<br>");
        document.write("Edad: " + listaAlumnosObj[i].edad + "<br>");
        document.write("Cursos: " + listaAlumnosObj[i].cursos.join(", ") + "<br><br>");
    }