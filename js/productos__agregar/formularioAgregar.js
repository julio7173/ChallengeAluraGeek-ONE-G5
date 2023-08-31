// Obtener los elementos del HTML
let dragNdrop = document.querySelector(".dragNdrop__area");
let imagen = document.querySelector(".upload");
let errorImagen = document.querySelector(".error-imagen");
let form = document.querySelector(".formulario__producto");
let categoriaProducto = document.querySelector(".producto__categoria");
let errorCategoria = document.querySelector(".error-categoria");
let nombreProducto = document.querySelector(".producto__nombre");
let errorNombre = document.querySelector(".error-nombre");
let precioProducto = document.querySelector(".producto__precio");
let errorPrecio = document.querySelector(".error-precio");
let descripcionProducto = document.querySelector(".producto__descripcion");
let errorDescripcion = document.querySelector(".error-descripcion");

// Crear una función para validar la imagen
function validarImagen() {
    // Obtener el elemento de imagen que se crea en la función showFile
    var imagen = document.querySelector(".producto__img-dropArea");
    // Si el elemento de imagen existe y tiene el atributo src, significa que se ha cargado una imagen válida
    if (imagen && imagen.hasAttribute("src")) {
      // Limpiar el mensaje de error si lo hay
      errorImagen.textContent = "";
      // Devolver verdadero
      return true;
    } else {
      // Si no hay elemento de imagen o no tiene el atributo src, mostrar el mensaje de error
      errorImagen.textContent = "Debes de seleccionar una imagen";
      // Devolver falso
      return false;
    }
  }

// Crear una función para validar la categoría
function validarCategoria() {
  // Obtener el valor del input de categoría
  let valor = categoriaProducto.value.trim();
  // Crear un arreglo con las categorías válidas
  let categoriasValidas = ["licores", "tragos", "refrescos"];
  // Si el valor está vacío, mostrar el mensaje de error
  if (valor === "") {
    errorCategoria.textContent = "La categoría no debe estar vacía";
    // Devolver falso
    return false;
  } else if (categoriasValidas.includes(valor.toLowerCase())) {
    // Si el valor está en el arreglo de categorías válidas, limpiar el mensaje de error si lo hay
    errorCategoria.textContent = "";
    // Devolver verdadero
    return true;
  } else {
    // Si el valor no está en el arreglo de categorías válidas, mostrar el mensaje de error
    errorCategoria.textContent = "La categoría '" + valor + "' no es válida";
    // Devolver falso
    return false;
  }
}

// Crear una función para validar el nombre
function validarNombre() {
  // Obtener el valor del input de nombre
  let valor = nombreProducto.value.trim();
  // Si el valor está vacío, mostrar el mensaje de error
  if (valor === "") {
    errorNombre.textContent = "El nombre no debe estar vacío";
    // Devolver falso
    return false;
  } else if (valor.length > 20) {
    // Si el valor tiene más de 20 caracteres, mostrar el mensaje de error
    errorNombre.textContent = "El nombre no debe tener más de 20 caracteres";
    // Devolver falso
    return false;
  } else {
    // Si el valor es válido, limpiar el mensaje de error si lo hay
    errorNombre.textContent = "";
    // Devolver verdadero
    return true;
  }
}

// Crear una función para validar el precio
function validarPrecio() {
  // Obtener el valor del input de precio
  let valor = precioProducto.value.trim();
  // Si el valor está vacío, mostrar el mensaje de error
  if (valor === "") {
    errorPrecio.textContent = "El precio no debe estar vacío";
    // Devolver falso
    return false;
  } else if (isNaN(valor)) {
    // Si el valor no es un número, mostrar el mensaje de error
    errorPrecio.textContent = "El precio debe ser un número";
    // Devolver falso
    return false;
  } else {
    // Si el valor es válido, limpiar el mensaje de error si lo hay
    errorPrecio.textContent = "";
    // Devolver verdadero
    return true;
  }
}

// Crear una función para validar la descripción
function validarDescripcion() {
  // Obtener el valor del input de descripción
  let valor = descripcionProducto.value.trim();
  // Si el valor está vacío, mostrar el mensaje de error
  if (valor === "") {
    errorDescripcion.textContent = "La descripción no debe estar vacía";
    // Devolver falso
    return false;
  } else if (valor.length > 150) {
    // Si el valor tiene más de 150 caracteres, mostrar el mensaje de error
    errorDescripcion.textContent =
      "La descripción no debe tener más de 150 caracteres";
    // Devolver falso
    return false;
  } else {
    // Si el valor es válido, limpiar el mensaje de error si lo hay
    errorDescripcion.textContent = "";
    // Devolver verdadero
    return true;
  }
}

// Crear una función para validar todo el formulario
function validarFormulario() {
  // Llamar a las funciones de validación de cada campo
  let imagenValida = validarImagen();
  let categoriaValida = validarCategoria();
  let nombreValido = validarNombre();
  let precioValido = validarPrecio();
  let descripcionValida = validarDescripcion();
  // Si todos los campos son válidos, devolver verdadero
  if (
    imagenValida &&
    categoriaValida &&
    nombreValido &&
    precioValido &&
    descripcionValida
  ) {
    return true;
  } else {
    // Si alguno de los campos no es válido, devolver falso
    return false;
  }
}

// Agregar un evento al botón de agregar producto
form.addEventListener("submit", function (e) {
  // Prevenir el comportamiento por defecto del formulario
  e.preventDefault();
  // Validar el formulario
  let formularioValido = validarFormulario();
  // Si el formulario es válido, enviarlo al servidor o hacer lo que quieras con los datos
  if (formularioValido) {
    alert("Formulario válido, enviando datos...");
    // Aquí puedes usar AJAX o Fetch para enviar los datos al servidor
    // O puedes usar form.submit() para enviar el formulario normalmente
  } /*else {
    // Si el formulario no es válido, mostrar un mensaje de alerta
    alert("Formulario inválido, por favor revisa los campos");
  }*/
});