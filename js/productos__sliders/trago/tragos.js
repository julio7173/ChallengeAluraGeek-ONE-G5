// Estos elementos son las imágenes de los tragos que se van a mostrar en un carrusel
let itemsTrago = document.querySelectorAll(".tragos__slider .tragos__item");
// Este elemento es el botón que sirve para cambiar la imagen del carrusel a la siguiente
let nextTrago = document.getElementById("tragoNext");
// Este elemento es el botón que sirve para cambiar la imagen del carrusel a la anterior
let prevTrago = document.getElementById("tragoPrev");

// Esta variable indica el índice de la imagen que se va a mostrar en el centro del carrusel
let activeTrago = 7;

// Definir una función tragoShow que se encarga de mostrar las imágenes del carrusel con un efecto de profundidad y perspectiva
function tragoShow() {
    // Esta variable servirá para contar el número de imágenes que hay a la derecha o a la izquierda de la imagen central
    let trago = 0;
    // Aplicar un estilo a la imagen que tiene el índice igual al valor de activeTrago, es decir, la imagen central
    // Este estilo consiste en quitarle cualquier transformación, ponerle un índice de profundidad 1, quitarle el filtro de desenfoque y ponerle una opacidad 1
    // Esto hace que la imagen central se vea clara y nítida
    itemsTrago[activeTrago].style.transform = `none`;
    itemsTrago[activeTrago].style.zIndex = 1;
    itemsTrago[activeTrago].style.filter = "none";
    itemsTrago[activeTrago].style.opacity = 1;
    // Usar un bucle for para recorrer las imágenes que están a la derecha de la imagen central, es decir, las que tienen un índice mayor al valor de activeTrago
    for (var i = activeTrago + 1; i < itemsTrago.length; i++) {
        // Incrementar el valor de la variable trago en 1 por cada iteración
        trago++;
        // Esto hace que las imágenes a la derecha se vean más pequeñas, borrosas y alejadas
        itemsTrago[i].style.transform = `translateX(${120 * trago}px) scale(${1 - 0.2 * trago}) perspective(1rem) rotateY(-1deg)`;
        itemsTrago[i].style.zIndex = 0;
        itemsTrago[i].style.filter = "blur(5px)";
        itemsTrago[i].style.opacity = trago > 2 ? 0 : 0.6;
    }
    // Reiniciar el valor de la variable trago a 0
    trago = 0;
    // Usar otro bucle for para recorrer las imágenes que están a la izquierda de la imagen central, es decir, las que tienen un índice menor al valor de activeTrago
    for (var i = activeTrago - 1; i >= 0; i--) {
        // Incrementar el valor de la variable trago en 1 por cada iteración
        trago++;
        // Esto hace que las imágenes a la izquierda se vean más pequeñas, borrosas y alejadas
        itemsTrago[i].style.transform = `translateX(${-120 * trago}px) scale(${1 - 0.2 * trago}) perspective(1rem) rotateY(1deg)`;
        itemsTrago[i].style.zIndex = 0;
        itemsTrago[i].style.filter = "blur(5px)";
        itemsTrago[i].style.opacity = trago > 2 ? 0 : 0.6;
    }
}
// Llamar a la función tragoShow para mostrar las imágenes del carrusel por primera vez
tragoShow();

// Esto hace que la imagen del carrusel cambie a la siguiente
nextTrago.onclick = function(){
    activeTrago = activeTrago + 1 < itemsTrago.length ? activeTrago + 1 : activeTrago;
    tragoShow();
}

// Esto hace que la imagen del carrusel cambie a la anterior
prevTrago.onclick = function(){
    activeTrago = activeTrago - 1 >= 0 ? activeTrago - 1 : activeTrago;
    tragoShow();
}