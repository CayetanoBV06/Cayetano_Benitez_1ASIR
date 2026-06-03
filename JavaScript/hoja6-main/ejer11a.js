const personaJSON = '{"nombre":"Ana","edad":25,"esEstudiante":true,"cursos":["Historia","Literatura"],"direccion":{"calle":"Avenida Siempre Viva 742","ciudad":"Springfield"}}';

    // Convertimos la cadena de texto JSON a un objeto JavaScript real
    const personaObj = JSON.parse(personaJSON);

    // Mostramos cada propiedad en una línea diferente
    document.write("<p>Nombre: " + personaObj.nombre + "</p>");
    document.write("<p>Edad: " + personaObj.edad + "</p>");
    document.write("<p>Es Estudiante: " + personaObj.esEstudiante + "</p>");
    // Los cursos están en un array interno
    document.write("<p>Cursos: " + personaObj.cursos.join(", ") + "</p>");
    // La dirección es otro objeto interno
    document.write("<p>Dirección: " + personaObj.direccion.calle + ", " + personaObj.direccion.ciudad + "</p>");