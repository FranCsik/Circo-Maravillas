document.addEventListener("DOMContentLoaded", () => {
    const modalCompra = document.getElementById("modalCompra");
    const cerrarModalCompra = document.getElementById("cerrarModalCompra");
    const comprarBoton = document.querySelector(".comprar-boton");
  
    // Elementos para actualizar información
    const compraFecha = document.getElementById("compra-fecha");
    const compraSector = document.getElementById("compra-sector");
    const compraCantidad = document.getElementById("compra-cantidad");
    const compraTotal = document.getElementById("compra-total");
  
    // Mostrar modal con información de compra
    comprarBoton.addEventListener("click", () => {
      const fechaSeleccionada = document.getElementById("evento-fecha").textContent;
      const sectorSeleccionado = document.querySelector(".sector.seleccionado");
      const cantidadSeleccionada = document.getElementById("cantidad-seleccionada").textContent;
      const total = document.getElementById("precio-total").textContent.replace("Total: $", "");
  
      // Validar que haya entradas seleccionadas y sector
      if (!sectorSeleccionado || parseInt(cantidadSeleccionada) === 0) {
        alert("Por favor, selecciona un sector y una cantidad de entradas antes de comprar.");
        return;
      }
  
      // Actualizar la información en el modal
      compraFecha.textContent = fechaSeleccionada;
      compraSector.textContent = sectorSeleccionado.textContent.split("\n")[0]; // Primer línea del sector
      compraCantidad.textContent = cantidadSeleccionada;
      compraTotal.textContent = `$${total}`;
  
      // Mostrar modal
      modalCompra.style.display = "block";
    });
  
    // Cerrar modal
    cerrarModalCompra.addEventListener("click", () => {
      modalCompra.style.display = "none";
    });
  
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
      if (event.target === modalCompra) {
        modalCompra.style.display = "none";
      }
    });
  });
  