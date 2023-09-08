// Agregar una función al evento load de la ventana
window.addEventListener("load", function () {
    // Seleccionar los botones producto__agregar y producto__editar
    let botonAgregar = document.querySelector(".producto__agregar");
    let botonEditar = document.querySelector(".producto__editar");
    // Verificar el valor de la variable global
    if (botonPresionado == "editar") {
        // Cambiar el estilo de display de los botones solo si se presionó editar
        botonAgregar.style.display = "none";
        botonEditar.style.display = "block";
    }
});