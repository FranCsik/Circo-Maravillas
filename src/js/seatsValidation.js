document.addEventListener("DOMContentLoaded", () => {
    const buscarBoton = document.querySelector("button[type='button']");
    const resultadoBusqueda = document.getElementById("resultado-busqueda");
    const fechaInput = document.getElementById("fecha");
    const cantidadInput = document.getElementById("cantidad");
    const eventoFecha = document.getElementById("evento-fecha");
    const cantidadSeleccionada = document.getElementById("cantidad-seleccionada");
    const cantidadBotones = document.querySelectorAll(".cantidad-boton");
    const precioTotal = document.getElementById("precio-total");
    const sectores = document.querySelectorAll(".sector");
    const mapaAsientos = document.querySelector(".mapa-asientos");

    let cantidadEntradas = 0; // Número de entradas seleccionadas
    let precioBase = 0; // Precio base del sector seleccionado

    // Mostrar resultados al presionar "Buscar"
    buscarBoton.addEventListener("click", () => {
        const fecha = fechaInput.value;
        const cantidad = parseInt(cantidadInput.value, 10);

        if (!fecha || !cantidad) {
            alert("Por favor, selecciona una fecha y cantidad de entradas.");
            return;
        }

        // Actualizar valores dinámicos
        eventoFecha.textContent = fecha; // Mostrar la fecha seleccionada
        cantidadEntradas = cantidad; // Sincronizar cantidad de entradas
        cantidadSeleccionada.textContent = cantidadEntradas; // Reflejar en la sección de entradas

        // Mostrar la sección de resultados y generar los asientos
        resultadoBusqueda.style.display = "block";
        generarAsientos(); // Generar los asientos
        actualizarTotal(); // Actualizar el total inicial
    });

    // Manejar selección de sectores
    sectores.forEach((sector) => {
        sector.addEventListener("click", () => {
            // Obtener el precio base del sector
            precioBase = parseInt(sector.dataset.precio, 10);
            // Remover selección previa
            sectores.forEach((s) => s.classList.remove("seleccionado"));
            // Marcar el sector actual como seleccionado
            sector.classList.add("seleccionado");
            actualizarTotal();
        });
    });

    // Manejar cantidad de entradas con botones (+/-)
    cantidadBotones.forEach((boton) => {
        boton.addEventListener("click", () => {
            if (boton.textContent === "+") {
                cantidadEntradas++;
            } else if (boton.textContent === "-" && cantidadEntradas > 0) {
                cantidadEntradas--;
            }
            cantidadSeleccionada.textContent = cantidadEntradas;
            actualizarTotal();
        });
    });

    // Actualizar el total
    function actualizarTotal() {
        const total = precioBase * cantidadEntradas;
        precioTotal.textContent = `Total: $${total}`;
    }

    // Generar asientos dinámicamente
    function generarAsientos() {
        mapaAsientos.innerHTML = ""; // Limpiar asientos previos

        for (let i = 1; i <= 100; i++) {
            const asiento = document.createElement("div");
            asiento.classList.add("asiento");
            asiento.dataset.numero = i; // Número de asiento

            // Simular algunos asientos ocupados
            if (Math.random() < 0.2) {
                asiento.classList.add("ocupado");
                asiento.setAttribute("title", "Asiento ocupado");
            } else {
                asiento.addEventListener("click", () => toggleAsiento(asiento));
            }

            mapaAsientos.appendChild(asiento);
        }
    }

    // Manejar selección de asientos
    function toggleAsiento(asiento) {
        if (asiento.classList.contains("ocupado")) return;

        if (asiento.classList.contains("seleccionado")) {
            asiento.classList.remove("seleccionado");
        } else {
            if (document.querySelectorAll(".asiento.seleccionado").length < cantidadEntradas) {
                asiento.classList.add("seleccionado");
            } else {
                alert("Ya seleccionaste todos los asientos para la cantidad de entradas.");
            }
        }
    }
});
