document.querySelector(".formulario").addEventListener("submit", function(event) {
    // Obtener valores del formulario
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const consulta = document.getElementById("consulta").value;
    
    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        event.preventDefault();
        return;
    }

    // Validar nombre
    if (nombre.trim() === "") {
        alert("Por favor ingresa tu nombre.");
        event.preventDefault();
        return;
    }

    // Validar consulta con un mínimo de caracteres
    if (consulta.trim().length < 10) {
        alert("Por favor ingresa un motivo de consulta con al menos 10 caracteres.");
        event.preventDefault();
        return;
    }

    // Si todas las validaciones pasan, permite el envío del formulario
    alert("Formulario enviado correctamente");
});
