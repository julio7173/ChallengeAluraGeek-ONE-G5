function irLogin(link) {
  location.href = link.value;
}

// Crear un array de objetos con los correos y contraseñas válidas
let usuarios = [
  { correo: "admin1@gmail.com", password: "1234" },
  { correo: "admin2@gmail.com", password: "5678" },
  { correo: "admin3@gmail.com", password: "9012" }
];

// Obtener el formulario por su clase
let formularioLogin = document.querySelector(".login__formulario");

// Obtener los elementos span por su clase
let errorCorreo = document.querySelector(".login__email + .error");
let errorPassword = document.querySelector(".login__password + .error");

// Agregar un evento de tipo submit al formulario
formularioLogin.addEventListener("submit", function (evento) {
  // Evitar que el formulario se envíe sin validar
  evento.preventDefault();

  // Obtener los valores de los campos de correo y contraseña
  let correo = formularioLogin.correo.value;
  let password = formularioLogin.password.value;

  // Crear una expresión regular para validar el formato del correo
  let regex = /\w+@\w+\.\w+/;

  // Verificar que los campos no estén vacíos
  if (correo === "") {
    errorCorreo.textContent = "Por favor, llene el campo correo";
    return;
  }

  if (password === "") {
    errorPassword.textContent = "Por favor, llene el campo constraseña";
    return;
  }

  // Verificar que el correo tenga el formato correcto
  if (!regex.test(correo)) {
    errorCorreo.textContent = "Por favor, ingrese un correo válido";
    return;
  } else {
    errorCorreo.textContent = "";
  }

  // Buscar si el correo y la contraseña coinciden con algún elemento del array de usuarios
  let usuario = usuarios.find(function (elemento) {
    return elemento.correo === correo && elemento.password === password;
  });

  // Si hay una coincidencia, redirigir al menú de administrador
  if (usuario) {
    window.location.href = "/admin.html";
  } else {
    // Si no hay una coincidencia, mostrar un mensaje de error en el campo de contraseña
    errorPassword.textContent = "Correo o contraseña incorrectos";
  }
});