const producto = {
        nombre: "Portátil",
        precio: 750,
        mostrarInfo: function() {
            console.log("Producto: " + this.nombre + " | Precio: " + this.precio + "€");
        }
    };

    // Llamada al método
    producto.mostrarInfo();