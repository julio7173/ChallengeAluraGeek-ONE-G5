let sliders = document.querySelectorAll(".productos__slider");
let slidersArray = Array.from(sliders);
let itemsProducts = slidersArray.map(slider => slider.getElementsByClassName("slider__item"));
let nextItems = document.querySelectorAll(".next__item");
let prevItems = document.querySelectorAll(".prev__item");
let activeProducts = [5, 7, 4];

function itemShow(sectionIndex, productIndex) {
    let item = 0;
    itemsProducts[sectionIndex][productIndex].style.transform = `none`;
    itemsProducts[sectionIndex][productIndex].style.zIndex = 1;
    itemsProducts[sectionIndex][productIndex].style.filter = "none";
    itemsProducts[sectionIndex][productIndex].style.opacity = 1;
    for (var i = productIndex + 1; i < itemsProducts[sectionIndex].length; i++) {
        item++;
        itemsProducts[sectionIndex][i].style.transform = `translateX(${120 * item}px) scale(${1 - 0.2 * item
            }) perspective(1rem) rotateY(-1deg)`;
        itemsProducts[sectionIndex][i].style.zIndex = 0;
        itemsProducts[sectionIndex][i].style.filter = "blur(5px)";
        itemsProducts[sectionIndex][i].style.opacity = item > 2 ? 0 : 0.6;
    }
    item = 0;
    for (var i = productIndex - 1; i >= 0; i--) {
        item++;
        itemsProducts[sectionIndex][i].style.transform = `translateX(${-120 * item}px) scale(${1 - 0.2 * item
            }) perspective(1rem) rotateY(1deg)`;
        itemsProducts[sectionIndex][i].style.zIndex = 0;
        itemsProducts[sectionIndex][i].style.filter = "blur(5px)";
        itemsProducts[sectionIndex][i].style.opacity = item > 2 ? 0 : 0.6;
    }
}

function itemShowAll() {
    for (let i = 0; i < sliders.length; i++) {
        itemShow(i, activeProducts[i]);
    }
}

itemShowAll();

nextItems.forEach((nextItem, index) => {
    nextItem.onclick = function () {
        activeProducts[index] =
            activeProducts[index] + 1 < itemsProducts[index].length
                ? activeProducts[index] + 1
                : activeProducts[index];
        itemShow(index, activeProducts[index]);
        // Agregar esta parte para mostrar u ocultar el detalle según el estado de la sección
        if (detallesVisibles[index]) {
            // Usar Array.from para convertir la colección HTML en un arreglo
            Array.from(verMases[index]).forEach((div) => {
                div.style.display = "none";
            });
            verMases[index][activeProducts[index]].style.display = "block";
        }
    };
});

prevItems.forEach((prevItem, index) => {
    prevItem.onclick = function () {
        activeProducts[index] =
            activeProducts[index] - 1 >= 0 ? activeProducts[index] - 1 : activeProducts[index];
        itemShow(index, activeProducts[index]);
        // Agregar esta parte para mostrar u ocultar el detalle según el estado de la sección
        if (detallesVisibles[index]) {
            // Usar Array.from para convertir la colección HTML en un arreglo
            Array.from(verMases[index]).forEach((div) => {
                div.style.display = "none";
            });
            verMases[index][activeProducts[index]].style.display = "block";
        }
    };
});

let sliderImgs = slidersArray.map(slider => slider.getElementsByClassName("item__img"));
let verMases = slidersArray.map(slider => slider.getElementsByClassName("item__verMas"));

// Volver a usar esta variable como un arreglo
let detallesVisibles = [false, false, false];

function verDetalle(imagenes, verMases) {
    // Usar un bucle for tradicional en lugar de un método forEach
    for (let sectionIndex = 0; sectionIndex < imagenes.length; sectionIndex++) {
        let sliderImg = imagenes[sectionIndex];
        // Usar otro bucle for tradicional en lugar de un método forEach
        for (let imgIndex = 0; imgIndex < sliderImg.length; imgIndex++) {
            let img = sliderImg[imgIndex];
            // Usar una variable local para controlar el detalle de cada imagen
            let detalleVisible = false;
            // Crear una función para manejar el evento de clic
            let handleClick = function (e) {
                if (!detalleVisible) {
                    sliders[sectionIndex].style.height = "40rem";
                    verMases[sectionIndex][imgIndex].style.display = "block";
                    detalleVisible = true;
                    // Actualizar el estado de la sección en el arreglo
                    detallesVisibles[sectionIndex] = true;
                } else {
                    sliders[sectionIndex].style.height = "30rem";
                    verMases[sectionIndex][imgIndex].style.display = "none";
                    detalleVisible = false;
                    // Actualizar el estado de la sección en el arreglo
                    detallesVisibles[sectionIndex] = false;
                }
            };
            // Eliminar el evento anterior antes de asignar uno nuevo
            img.removeEventListener("click", handleClick);
            img.addEventListener("click", handleClick);
        }
    }
}

verDetalle(sliderImgs, verMases);