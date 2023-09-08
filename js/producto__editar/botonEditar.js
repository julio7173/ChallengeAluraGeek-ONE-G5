// Seleccionar todos los botones editar__img-admin
let actionEdit = document.querySelectorAll(".editar__img-admin");
// Recorrer la lista de botones
for (let i = 0; i < actionEdit.length; i++) {
    // Agregar un evento de clic a cada botón
    actionEdit[i].addEventListener("click", function () {
        // Redireccionar a nuevoProducto.html con un parámetro edit=true
        window.location.href = "nuevoProducto.html?edit=true";
    });
}

// Agregar una función al evento load de la ventana
window.addEventListener("load", function () {
    // Obtener el parámetro edit de la URL
    let urlParams = new URLSearchParams(window.location.search);
    let edit = urlParams.get("edit");
    // Si el parámetro edit es true, cambiar los estilos
    if (edit === "true") {
        // Seleccionar los botones producto__agregar y producto__editar
        let botonAgregar = document.querySelector(".producto__agregar");
        let botonEditar = document.querySelector(".producto__editar");
        // Cambiar el estilo de display de los botones solo si se presionó editar
        botonAgregar.style.display = "none";
        botonEditar.style.display = "block";
    }
});