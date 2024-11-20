document.querySelector(".formulario").addEventListener("submit", function(event) {
    // Obtener valores del formulario
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const consulta = document.getElementById("consulta").value;

    // Limpiar mensajes de error previos
    document.getElementById("email-error").style.display = "none";
    document.getElementById("nombre-error").style.display = "none";
    document.getElementById("consulta-error").style.display = "none";
    document.getElementById("success-message").style.display = "none"; // Ocultar mensaje de éxito

    let isValid = true;

    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Por favor, ingresa un correo electrónico válido.";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Validar nombre (solo letras y espacios)
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!namePattern.test(nombre)) {
        document.getElementById("nombre-error").textContent = "El nombre solo puede contener letras y espacios.";
        document.getElementById("nombre-error").style.display = "block";
        isValid = false;
    } else if (nombre.trim() === "") {
        document.getElementById("nombre-error").textContent = "Por favor, ingresa tu nombre.";
        document.getElementById("nombre-error").style.display = "block";
        isValid = false;
    }

    // Validar consulta con un mínimo de caracteres
    if (consulta.trim().length < 10) {
        document.getElementById("consulta-error").textContent = "El motivo de consulta debe tener al menos 10 caracteres.";
        document.getElementById("consulta-error").style.display = "block";
        isValid = false;
    }

    // Si alguna validación falla, prevenir el envío del formulario
    if (!isValid) {
        event.preventDefault();
    } else {
        // Mostrar mensaje de confirmación si todo es válido
        const successMessage = document.getElementById("success-message");
        successMessage.textContent = "✔️ Formulario enviado correctamente";
        successMessage.style.display = "block";
        event.preventDefault(); // Esto evita el envío para que puedas ver el mensaje en la misma página
    }
});
