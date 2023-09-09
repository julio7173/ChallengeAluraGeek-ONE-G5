/*// Seleccionamos todos los botones editar__img-admin y les asignamos un evento click
let botones = document.querySelectorAll(".editar__img-admin");
botones.forEach(boton => {
  boton.addEventListener("click", guardarDatos);
});*/

// Definimos la función guardarDatos que recibe el evento como parámetro
function guardarDatos(evento) {
  // Obtenemos el elemento que ha disparado el evento (el botón clicado)
  let boton = evento.target;
  // Obtenemos el elemento padre del botón, que es el div producto__img-admin
  let producto = boton.parentElement;
  // Obtenemos los elementos hijos del producto que contienen la imagen, el nombre, el precio y la descripción
  let imagen = producto.querySelector(".todos__producto").src;
  let nombre = producto.querySelector(".detalle__nombre").textContent;
  let precio = producto.querySelector(".detalle__precio").textContent;
  let descripcion = producto.querySelector(".detalle__descripcion").textContent;
  // Creamos un objeto JavaScript con los datos del producto
  let datos = {
    imagen: imagen,
    nombre: nombre,
    // Usamos replace para quitar el "BS" del precio y lo convertimos a número
    precio: +precio.replace(" BS.", ""),
    descripcion: descripcion
  };
  // Convertimos el objeto a una cadena JSON usando JSON.stringify
  let json = JSON.stringify(datos);
  // Guardamos la cadena JSON en el localStorage usando el nombre como clave
  localStorage.setItem(nombre, json);
  // Opcionalmente, podemos mostrar un mensaje de confirmación al usuario
  alert("Los datos del producto " + nombre + " se han guardado correctamente.");
}

// Obtenemos los datos del producto desde el localStorage
let datos = JSON.parse(localStorage.getItem(nombre));

// Asignamos los valores del producto a los elementos del formulario
let inputNombre = document.querySelector(".producto__nombre");
let inputPrecio = document.querySelector(".producto__precio");
let inputDescripcion = document.querySelector(".producto__descripcion");

inputNombre.value = datos.nombre;
inputPrecio.value = datos.precio;
inputDescripcion.value = datos.descripcion;