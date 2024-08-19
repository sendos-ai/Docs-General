
document.addEventListener("DOMContentLoaded", function () {
    var set_pswd = "@Adm!n.2024+#";

    // Función para mostrar el overlay de contraseña
    function showPasswordOverlay() {
        var overlay = document.createElement("div");
        overlay.className = "overlay";

        var logo = document.createElement("img");
        logo.src = "assets/img/sendos_iso.png";
        overlay.appendChild(logo);

        var message = document.createElement("h1");
        message.textContent = "Por favor, Introduce la clave para leer la documentacion:";
        overlay.appendChild(message);

        var input = document.createElement("input");
        input.type = "password";
        input.placeholder = "Ingresa clave";

        var button = document.createElement("button");
        button.textContent = "Leer";

        overlay.appendChild(input);
        overlay.appendChild(button);

        document.body.appendChild(overlay);

        button.addEventListener("click", function () {
            if (input.value === set_pswd) {
                localStorage.setItem("docsPassword", set_pswd);
                overlay.classList.add("hidden");
            } else {
                message.innerHTML = "Acceso denegado. Clave incorrecta. No puedes Leer la documentacion.";
                message.style.color = "red";
            }
        });
    }

    // Verifica si la contraseña está almacenada en localStorage
    var storedPassword = localStorage.getItem("docsPassword");
    if (storedPassword !== set_pswd) {
        showPasswordOverlay();
    }
});
