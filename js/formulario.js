let formulario = document.querySelector(".formulario");
let nombre = document.querySelector(".formulario__nombre");
let mensaje = document.querySelector(".formulario__mensaje");
let boton = document.querySelector(".formulario__boton");

// Agregar un evento de submit al formulario
formulario.addEventListener("submit", function (event) {
  // Evitar que el formulario se envíe por defecto
  event.preventDefault();
  // Limpiar los posibles mensajes de error anteriores
  limpiarErrores();
  // Validar los campos del formulario
  let errores = validarCampos(nombre.value, mensaje.value);
  // Si hay errores, mostrarlos al usuario
  if (errores.length > 0) {
    mostrarErrores(errores);
  } else {
    // Si no hay errores, enviar el mensaje
    enviarMensaje(nombre.value, mensaje.value);
  }
});

// Función que valida los campos del formulario y devuelve un array de errores
function validarCampos(nombre, mensaje) {
  let errores = [];
  // Validar que el nombre no esté vacío y tenga máximo 40 caracteres
  if (nombre.trim() == "") {
    errores.push("El nombre no puede estar vacío");
  } else if (nombre.length > 40) {
    errores.push("El nombre no puede tener más de 40 caracteres");
  }
  // Validar que el mensaje no esté vacío y tenga máximo 120 caracteres
  if (mensaje.trim() == "") {
    errores.push("El mensaje no puede estar vacío");
  } else if (mensaje.length > 120) {
    errores.push("El mensaje no puede tener más de 120 caracteres");
  }
  return errores;
}

// Función que muestra los mensajes de error al usuario
function mostrarErrores(errores) {
  // Crear un elemento ul para contener los mensajes de error
  let ul = document.createElement("ul");
  ul.className = "formulario__errores";
  // Recorrer el array de errores y crear un elemento li por cada uno
  for (let i = 0; i < errores.length; i++) {
    let li = document.createElement("li");
    li.textContent = errores[i];
    ul.appendChild(li);
  }
  // Insertar el elemento ul antes del botón del formulario
  formulario.insertBefore(ul, boton);
}

// Función que limpia los mensajes de error anteriores
function limpiarErrores() {
  // Seleccionar el elemento ul que contiene los mensajes de error
  let ul = document.querySelector(".formulario__errores");
  // Si existe, eliminarlo del formulario
  if (ul) {
    formulario.removeChild(ul);
  }
}

// Función que muestra una alerta al usuario con el nombre y el mensaje
function enviarMensaje(nombre, mensaje) {
  // Mostrar una alerta con el nombre y el mensaje
  alert("Tu nombre es " + nombre + " y tu mensaje es " + mensaje + ". Gracias por contactarnos.");
}