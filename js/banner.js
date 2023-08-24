// Declara una variable imagenes que es un arreglo de cadenas.
const imagenes = [
    "/styles/img/banner-promos/p-intro.png",
    "/styles/img/banner-promos/p-1.png",
    "/styles/img/banner-promos/p-2.png",
    "/styles/img/banner-promos/p-3.png"
];

// Declara una variable indiceActual que tiene el valor 0, indica el índice de la imagen que se va a mostrar en el banner.
let indiceActual = 0;

// Este elemento es el botón que sirve para cambiar la imagen del banner a la anterior.
const prevButton = document.querySelector(".prev");
// Agrega un evento al botón prevButton para que al hacer click en él, se decremente el valor de indiceActual en 1 y se use el operador módulo con la longitud del arreglo imagenes para evitar que el índice se salga del rango. Luego, llama a la función cambiarImagen con el valor de indiceActual.
prevButton.addEventListener("click", function () {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(indiceActual);
});

// Este elemento es el botón que sirve para cambiar la imagen del banner a la siguiente.
const nextButton = document.querySelector(".next");
// Agrega un evento al botón nextButton para que al hacer click en él, se incremente el valor de indiceActual en 1 y se use el operador módulo con la longitud del arreglo imagenes para evitar que el índice se salga del rango. Luego, llama a la función cambiarImagen con el valor de indiceActual.
nextButton.addEventListener("click", function () {
    indiceActual = (indiceActual + 1) % imagenes.length;
    cambiarImagen(indiceActual);
});

// Define la función cambiarImagen que recibe un parámetro indice y hace lo siguiente:
function cambiarImagen(indice) {
    // Este elemento es el div donde se va a mostrar la imagen del banner.
    const banner = document.querySelector(".banner");
    // Esto hace que el elemento banner cambie su imagen de fondo según el índice.
    banner.style.backgroundImage = `url('${imagenes[indice]}')`; 
}