// Obtener todos los botones eliminar__img-admin
let botones = document.getElementsByClassName("eliminar__img-admin");
// Recorrer todos los botones y asignarles el evento click
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function() {
    // Llamar a la función eliminarProducto pasando el botón como parámetro
    eliminarProducto(this);
  });
}