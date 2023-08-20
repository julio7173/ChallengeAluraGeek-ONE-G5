/*const imagenes = [
    "/styles/img/banner-promos/p-intro.png",
    "/styles/img/banner-promos/p-1.png",
    "/styles/img/banner-promos/p-2.png",
    "/styles/img/banner-promos/p-3.png"
];

let imagenActual = imagenes[0];

const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", function () {
    imagenActual = imagenes[imagenes.indexOf(imagenActual) - 1];
    cambiarImagen(imagenActual);
});

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", function () {
    imagenActual = imagenes[imagenes.indexOf(imagenActual) + 1];
    cambiarImagen(imagenActual);
});

function cambiarImagen(imagen) {
    const banner = document.querySelector(".banner");
    banner.style.backgroundImage = `url('${imagen}')`;
}*/











const imagenes = [
    "/styles/img/banner-promos/p-intro.png",
    "/styles/img/banner-promos/p-1.png",
    "/styles/img/banner-promos/p-2.png",
    "/styles/img/banner-promos/p-3.png"
];

let indiceActual = 0;

const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", function () {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(indiceActual);
});

const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", function () {
    indiceActual = (indiceActual + 1) % imagenes.length;
    cambiarImagen(indiceActual);
});

function cambiarImagen(indice) {
    const banner = document.querySelector(".banner");
    banner.style.backgroundImage = `url('${imagenes[indice]}')`; 
}