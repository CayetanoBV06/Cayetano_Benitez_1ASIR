const estudiante = {
        nombre: "Pedro",
        curso: "1ASIR",
        // Creamos la función/método dentro del objeto
        mensaje: function() {
            return "Hola, soy " + this.nombre + " y estoy en el curso " + this.curso;
        }
    };

    // Llamamos al método y lo mostramos por consola
    let saludo = estudiante.mensaje();
    console.log(saludo);