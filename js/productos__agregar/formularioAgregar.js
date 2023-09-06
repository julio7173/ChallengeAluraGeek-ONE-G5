// Obtener los elementos del HTML
let dragNdrop = document.querySelector(".dragNdrop__area");
let imagen = document.querySelector(".producto__img-dropArea");
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
  // Comprobar si la variable imageData tiene algún valor asignado
  if (imageData) {
    errorImagen.textContent = "";
    return true;
  } else {
    errorImagen.textContent = "Debes de seleccionar una imagen";
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

function validarFormulario() {
  let imagenValida = validarImagen();
  let categoriaValida = validarCategoria();
  let nombreValido = validarNombre();
  let precioValido = validarPrecio();
  let descripcionValida = validarDescripcion();
  if (imagenValida && categoriaValida && nombreValido && precioValido && descripcionValida) {
    // Usar la variable imageData en lugar de imagen.src
    let nuevoProducto = {
      imagen: imageData,
      categoria: categoriaProducto.value,
      nombre: nombreProducto.value,
      precio: precioProducto.value,
      descripcion: descripcionProducto.value,
    };
    let nuevoProductoJSON = JSON.stringify(nuevoProducto);
    localStorage.setItem("nuevoProducto", nuevoProductoJSON);
    let respuesta = confirm("¿Estás seguro de querer enviar el formulario?");
    if (respuesta) {
      alert("Formulario enviado correctamente.");
      window.location.href = "index.html";
    }
  } else {
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
  }
});