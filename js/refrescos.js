// Estos elementos son las imágenes de los refrescos que se van a mostrar en un carrusel
const itemsRefresco = document.querySelectorAll(".refrescos__slider .refrecos__item");
// Este elemento es el botón que sirve para cambiar la imagen del carrusel a la siguiente
let nextRefresco = document.getElementById("refrescoNext");
// Este elemento es el botón que sirve para cambiar la imagen del carrusel a la anterior
let prevRefresco = document.getElementById("refrescoPrev");

// Esta variable indica el índice de la imagen que se va a mostrar en el centro del carrusel
let activeRefresco = 4;

// Definir una función refrescoShow que se encarga de mostrar las imágenes del carrusel con un efecto de profundidad y perspectiva
function refrescoShow() {
    // Esta variable servirá para contar el número de imágenes que hay a la derecha o a la izquierda de la imagen central
    let refresco = 0;
    // Aplicar un estilo a la imagen que tiene el índice igual al valor de activeRefresco, es decir, la imagen central
    // Este estilo consiste en quitarle cualquier transformación, ponerle un índice de profundidad 1, quitarle el filtro de desenfoque y ponerle una opacidad 1
    // Esto hace que la imagen central se vea clara y nítida
    itemsRefresco[activeRefresco].style.transform = `none`;
    itemsRefresco[activeRefresco].style.zIndex = 1;
    itemsRefresco[activeRefresco].style.filter = "none";
    itemsRefresco[activeRefresco].style.opacity = 1;
    // Usar un bucle for para recorrer las imágenes que están a la derecha de la imagen central, es decir, las que tienen un índice mayor al valor de activeRefresco
    for (var i = activeRefresco + 1; i < itemsRefresco.length; i++) {
        // Incrementar el valor de la variable refresco en 1 por cada iteración
        refresco++;
        // Esto hace que las imágenes a la derecha se vean más pequeñas, borrosas y alejadas
        itemsRefresco[i].style.transform = `translateX(${120 * refresco}px) scale(${1 - 0.2 * refresco}) perspective(1rem) rotateY(-1deg)`;
        itemsRefresco[i].style.zIndex = 0;
        itemsRefresco[i].style.filter = "blur(5px)";
        itemsRefresco[i].style.opacity = refresco > 2 ? 0 : 0.6;
    }
    // Reiniciar el valor de la variable refresco a 0
    refresco = 0;
    // Usar otro bucle for para recorrer las imágenes que están a la izquierda de la imagen central, es decir, las que tienen un índice menor al valor de activeRefresco
    for (var i = activeRefresco - 1; i >= 0; i--) {
        // Incrementar el valor de la variable refresco en 1 por cada iteración
        refresco++;
        // Esto hace que las imágenes a la izquierda se vean más pequeñas, borrosas y alejadas
        itemsRefresco[i].style.transform = `translateX(${-120 * refresco}px) scale(${1 - 0.2 * refresco}) perspective(1rem) rotateY(1deg)`;
        itemsRefresco[i].style.zIndex = 0;
        itemsRefresco[i].style.filter = "blur(5px)";
        itemsRefresco[i].style.opacity = refresco > 2 ? 0 : 0.6;
    }
}
// Llamar a la función refrescoShow para mostrar las imágenes del carrusel por primera vez
refrescoShow();

// Esto hace que la imagen del carrusel cambie a la siguiente
nextRefresco.onclick = function(){
    activeRefresco = activeRefresco + 1 < itemsRefresco.length ? activeRefresco + 1 : activeRefresco;
    refrescoShow();
}

// Esto hace que la imagen del carrusel cambie a la anterior
prevRefresco.onclick = function(){
    activeRefresco = activeRefresco - 1 >= 0 ? activeRefresco - 1 : activeRefresco;
    refrescoShow();
}