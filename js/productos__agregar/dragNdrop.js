// Obtener los elementos del html
const dropArea = document.querySelector(".dragNdrop__area");
let dragText = dropArea.querySelector(".producto__mensaje-1");
let rigthButton = dropArea.querySelector(".producto__boton-1");
let failButton = dropArea.querySelector(".producto__boton-2");
let imageData;

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
/*
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
            // Crear una etiqueta <img> con la clase producto__img y el atributo src igual a la URL del archivo
            let imgTag = `<img src="${fileURL}" class="producto__img-dropArea">`;
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
}*/

// Modificar la función showFile para asignar la cadena de datos URL a la variable imageData
function showFile() {
    let fileType = file.type;
    let validExtensions = ["image/png", "image/jpeg", "image/jpg"];
    if (validExtensions.includes(fileType)) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileURL = fileReader.result;
        // Asignar la cadena de datos URL a la variable imageData
        imageData = fileURL;
        let imgTag = `<img src="${fileURL}" class="producto__img-dropArea">`;
        dropArea.innerHTML = imgTag;
      };
      fileReader.readAsDataURL(file);
    } else {
      errorImagen.textContent = "Este archivo no es una imagen";
      dropArea.classList.remove("active");
    }
  }