function eliminarProducto(boton) {
    // Obtener el id del producto
    let id = boton.parentElement.id;
    // Obtener el nombre del producto
    let nombre = boton.closest(".producto__img-admin").querySelector(".detalle__nombre").textContent;
    // Mostrar un cuadro de diálogo de confirmación con el nombre del producto
    let confirmacion = confirm("¿Estás seguro de que quieres eliminar '" + nombre + "' de tu inventario?");
    // Si el usuario hizo clic en Aceptar, ejecutar el resto del código
    if (confirmacion) {
        // Eliminar el elemento div del DOM
        boton.closest(".producto__img-admin").remove();
        // Eliminar el producto del localStorage
        localStorage.removeItem(id);
        // Mostrar un mensaje de confirmación con el nombre del producto
        alert("El producto: '" + nombre + "' ha sido eliminado del inventario.");
    } else {
        // Si el usuario hizo clic en Cancelar, no hacer nada
        alert("El producto: '" + nombre + "' NO ha sido eliminado del inventario.");
    }
}