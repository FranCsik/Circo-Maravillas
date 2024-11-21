document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalMapa");
    const openModalButton = document.querySelector(".mapa-boton");
    const closeModalButton = document.querySelector(".close-button");
  
    // Abrir modal
    openModalButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    // Cerrar modal
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  