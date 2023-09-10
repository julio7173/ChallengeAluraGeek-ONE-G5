// En el archivo validarNuevoProducto.js
let json = localStorage.getItem("editarProducto"); // Obtenemos el string del localStorage con la clave "editarProducto"
let datos = JSON.parse(json); // Convertimos el string a un objeto JavaScript

if (datos) { // Si datos no es nulo
  let inputCategoria = document.querySelector(".producto__categoria");
  let inputNombre = document.querySelector(".producto__nombre");
  let inputPrecio = document.querySelector(".producto__precio");
  let inputDescripcion = document.querySelector(".producto__descripcion");

  inputCategoria.value = datos.categoria; 
  inputNombre.value = datos.nombre;
  inputPrecio.value = datos.precio;
  inputDescripcion.value = datos.descripcion;
} else { // Si datos es nulo
  // Aquí puedes poner algún código para manejar este caso, como mostrar un mensaje de error o redirigir a otra página
}