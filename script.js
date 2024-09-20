// Esperamos a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("toggle-theme");

    button.addEventListener("click", function() {
        // Alterna entre el tema claro y oscuro
        document.body.classList.toggle("dark-mode");

        // Cambia el texto del botón según el modo actual
        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "Cambiar a modo claro";
        } else {
            button.textContent = "Cambiar a modo oscuro";
        }
    });
});
