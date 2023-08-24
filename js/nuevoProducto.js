// Obtener los elementos del html
const dropArea = document.querySelector(".dragNdrop__area");
let dragText = dropArea.querySelector(".producto__mensaje-1");
let rigthButton = dropArea.querySelector(".producto__boton-1");
let failButton = dropArea.querySelector(".producto__boton-2");

// Declarar una variable file que servirá para almacenar el archivo de la imagen que se cargue
let file;

// Agregar un evento al botón rigthButton para que al hacer click en él, se active el input failButton
rigthButton.onclick = () => {
    failButton.click();
};

// Agregar un evento al input failButton para que al cambiar su valor, es decir, al seleccionar una imagen, se guarde el archivo en la variable file y se llame a la función showFile
failButton.addEventListener("change", function () {
    file = this.files[0];
    showFile();
    // Añadir la clase active al elemento dropArea para cambiar su estilo
    dropArea.classList.add("active");
});

// Agregar un evento al elemento dropArea para detectar cuando se arrastra una imagen sobre él
dropArea.addEventListener("dragover", (event) => {
    // Prevenir el comportamiento por defecto del navegador
    event.preventDefault();
    // Añadir la clase active al elemento dropArea para cambiar su estilo
    dropArea.classList.add("active");
    // Cambiar el texto del elemento dragText a "Suelta para cargar la imagen"
    dragText.textContent = "Suelta para cargar la imagen";
});

// Agregar un evento al elemento dropArea para detectar cuando se deja de arrastrar una imagen sobre él
dropArea.addEventListener("dragleave", () => {
    // Quitar la clase active al elemento dropArea para volver a su estilo original
    dropArea.classList.remove("active");
    // Cambiar el texto del elemento dragText a "Arrastra y suelta para cargar la imagen"
    dragText.textContent = "Arrastra y suelta para cargar la imagen";
});

// Agregar un evento al elemento dropArea para detectar cuando se suelta una imagen sobre él
dropArea.addEventListener("drop", (event) => {
    // Prevenir el comportamiento por defecto del navegador
    event.preventDefault();
    // Guardar el archivo de la imagen en la variable file
    file = event.dataTransfer.files[0];
    // Llamar a la función showFile que mostrará la imagen en el área de arrastrar y soltar
    showFile();
});

// Definir la función showFile que recibe el archivo de la imagen y verifica si tiene una extensión válida
function showFile() {
    // Obtener el tipo de archivo de la imagen y guardarlo en la variable fileType
    let fileType = file.type;
    // Definir una lista de extensiones válidas para las imágenes
    let validExtensions = ["image/png", "image/jpeg", "image/jpg"];
    // Comprobar si el tipo de archivo está incluido en la lista de extensiones válidas
    if (validExtensions.includes(fileType)) {
        // Crear un objeto de tipo FileReader que lee el contenido del archivo y lo convierte en una URL
        let fileReader = new FileReader();
        // Definir una función que se ejecuta cuando el FileReader termina de leer el archivo
        fileReader.onload = () => {
            // Obtener la URL del archivo y guardarla en la variable fileURL
            let fileURL = fileReader.result;
            // Mostrar la URL en la consola del navegador (opcional)
            console.log(fileURL);
            // Crear una etiqueta <img> con la clase producto__img y el atributo src igual a la URL del archivo
            let imgTag = `<img src="${fileURL}" class="producto__img">`;
            // Insertar la etiqueta <img> en el elemento dropArea, reemplazando su contenido anterior
            dropArea.innerHTML = imgTag;
        }
        // Leer el archivo como una URL usando el FileReader
        fileReader.readAsDataURL(file);
    } else {
        // Mostrar un mensaje de error en el elemento span con la clase errorImagen
        errorImagen.textContent = "Este archivo no es una imagen";
        // Quitar la clase active al elemento dropArea para volver a su estilo original
        dropArea.classList.remove("active");
    }
}


// Obtener los elementos del html
const productoCategoria = document.querySelector(".producto__categoria");
const productoNombre = document.querySelector(".producto__nombre");
const productoPrecio = document.querySelector(".producto__precio");
const productoAgregar = document.querySelector(".producto__agregar");
const errorImagen = document.querySelector(".error-imagen");
const errorCategoria = document.querySelector(".error-categoria");
const errorNombre = document.querySelector(".error-nombre");
const errorPrecio = document.querySelector(".error-precio");

// Agregar un evento al botón de agregar producto
productoAgregar.addEventListener("click", function (e) {
    // Evitar que el formulario se envíe
    e.preventDefault();
    // Limpiar los mensajes de error anteriores
    errorImagen.textContent = "";
    errorCategoria.textContent = "";
    errorNombre.textContent = "";
    errorPrecio.textContent = "";
    // Obtener los valores de los campos
    const categoria = productoCategoria.value.trim();
    const nombre = productoNombre.value.trim();
    const precio = productoPrecio.value.trim();
    // Validar que los campos no estén vacíos
    if (categoria === "") {
        errorCategoria.textContent = "La categoría del producto no puede estar vacía";
    }
    if (nombre === "") {
        errorNombre.textContent = "El nombre del producto no puede estar vacío";
    }
    if (precio === "") {
        errorPrecio.textContent = "El precio del producto no puede estar vacío";
    }
    // Validar que los campos de categoría y nombre tengan máximo 20 caracteres
    if (categoria.length > 20) {
        errorCategoria.textContent = "La categoría del producto debe tener máximo 20 caracteres";
    }
    if (nombre.length > 20) {
        errorNombre.textContent = "El nombre del producto debe tener máximo 20 caracteres";
    }
    // Verificar que todos los campos son válidos
if (categoria !== "" && nombre !== "" && precio !== "" && categoria.length <= 20 && nombre.length <= 20) {
    // Verificar que hay una imagen cargada
    if (file) {
        // Mandar una alerta con el mensaje de éxito
        alert("El producto se agregó con éxito");
    } else {
        // Mostrar un mensaje de error en el span errorImagen
        errorImagen.textContent = "Debes cargar una imagen para el producto";
    }
}
});