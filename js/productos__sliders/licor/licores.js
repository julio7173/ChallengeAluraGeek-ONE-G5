// Estos elementos son las imágenes de los licores que se van a mostrar en un carrusel
let itemsLicor = document.querySelectorAll(".licores__slider .licores__item");
// Este elemento es el botón que sirve para cambiar la imagen del carrusel a la siguiente
let nextLicor = document.getElementById("licorNext");
// Este elemento es el botón que sirve para cambiar la imagen del carrusel a la anterior
let prevLicor = document.getElementById("licorPrev");

// Esta variable indica el índice de la imagen que se va a mostrar en el centro del carrusel
let activeLicor = 5;

// Definir una función licorShow que se encarga de mostrar las imágenes del carrusel con un efecto de profundidad y perspectiva
function licorShow() {
    // Esta variable servirá para contar el número de imágenes que hay a la derecha o a la izquierda de la imagen central
    let licor = 0;
    // Aplicar un estilo a la imagen que tiene el índice igual al valor de activeLicor, es decir, la imagen central
    // Este estilo consiste en quitarle cualquier transformación, ponerle un índice de profundidad 1, quitarle el filtro de desenfoque y ponerle una opacidad 1
    // Esto hace que la imagen central se vea clara y nítida
    itemsLicor[activeLicor].style.transform = `none`;
    itemsLicor[activeLicor].style.zIndex = 1;
    itemsLicor[activeLicor].style.filter = "none";
    itemsLicor[activeLicor].style.opacity = 1;
    // Usar un bucle for para recorrer las imágenes que están a la derecha de la imagen central, es decir, las que tienen un índice mayor al valor de activeLicor
    for (var i = activeLicor + 1; i < itemsLicor.length; i++) {
        // Incrementar el valor de la variable licor en 1 por cada iteración
        licor++;
        // Esto hace que las imágenes a la derecha se vean más pequeñas, borrosas y alejadas
        itemsLicor[i].style.transform = `translateX(${120 * licor}px) scale(${1 - 0.2 * licor}) perspective(1rem) rotateY(-1deg)`;
        itemsLicor[i].style.zIndex = 0;
        itemsLicor[i].style.filter = "blur(5px)";
        itemsLicor[i].style.opacity = licor > 2 ? 0 : 0.6;
    }
    // Reiniciar el valor de la variable licor a 0
    licor = 0;
    // Usar otro bucle for para recorrer las imágenes que están a la izquierda de la imagen central, es decir, las que tienen un índice menor al valor de activeLicor
    for (var i = activeLicor - 1; i >= 0; i--) {
        // Incrementar el valor de la variable licor en 1 por cada iteración
        licor++;
        // Esto hace que las imágenes a la izquierda se vean más pequeñas, borrosas y alejadas
        itemsLicor[i].style.transform = `translateX(${-120 * licor}px) scale(${1 - 0.2 * licor}) perspective(1rem) rotateY(1deg)`;
        itemsLicor[i].style.zIndex = 0;
        itemsLicor[i].style.filter = "blur(5px)";
        itemsLicor[i].style.opacity = licor > 2 ? 0 : 0.6;
    }
}
// Llamar a la función licorShow para mostrar las imágenes del carrusel por primera vez
licorShow();

// Esto hace que la imagen del carrusel cambie a la siguiente
nextLicor.onclick = function(){
    activeLicor = activeLicor + 1 < itemsLicor.length ? activeLicor + 1 : activeLicor;
    licorShow();
}

// Esto hace que la imagen del carrusel cambie a la anterior
prevLicor.onclick = function(){
    activeLicor = activeLicor - 1 >= 0 ? activeLicor - 1 : activeLicor;
    licorShow();
}