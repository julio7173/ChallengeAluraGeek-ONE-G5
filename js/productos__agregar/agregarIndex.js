function updateAction() {
    // Actualizar el arreglo itemsProducts
    itemsProducts = slidersArray.map(slider => slider.getElementsByClassName("slider__item"));
    // Actualizar el arreglo sliderImgs
    sliderImgs = slidersArray.map(slider => slider.getElementsByClassName("item__img"));
    // Actualizar el arreglo verMases
    verMases = slidersArray.map(slider => slider.getElementsByClassName("item__verMas"));
    // Actualizar la función verDetalle (sin pasar el tercer parámetro)
    verDetalle(sliderImgs, verMases);
}

// Definir las funciones que se ejecutarán al cargar la ventana
let agregarIndex = function () {
    let nuevoProductoIndexJSON = localStorage.getItem("nuevoProductoIndex");
    if (nuevoProductoIndexJSON) {
        let nuevoProductoIndex = JSON.parse(nuevoProductoIndexJSON);
        // Usar la propiedad imagen que contiene la cadena de datos URL
        let imagenIndex = nuevoProductoIndex.imagen;
        let categoriaIndex = nuevoProductoIndex.categoria;
        let nombreIndex = nuevoProductoIndex.nombre;
        let precioIndex = nuevoProductoIndex.precio;
        let descripcionIndex = nuevoProductoIndex.descripcion;
        let sliderItem = document.createElement("div");
        sliderItem.classList.add("slider__item");
        let itemImgIndex = document.createElement("img");
        itemImgIndex.classList.add("item__img");
        // Asignar la cadena de datos URL al atributo src
        itemImgIndex.src = imagenIndex;
        itemImgIndex.alt = nombreIndex;
        let itemVerMasIndex = document.createElement("div");
        itemVerMasIndex.classList.add("item__verMas");
        let itemNombreIndex = document.createElement("h2");
        itemNombreIndex.classList.add("item__nombre");
        itemNombreIndex.textContent = nombreIndex;
        let itemPrecioIndex = document.createElement("p");
        itemPrecioIndex.classList.add("item__precio");
        itemPrecioIndex.textContent = precioIndex + " BS.";
        let itemDescripcionIndex = document.createElement("p");
        itemDescripcionIndex.classList.add("item__descripcion");
        itemDescripcionIndex.textContent = descripcionIndex;
        sliderItem.append(itemImgIndex, itemVerMasIndex);
        itemVerMasIndex.append(itemNombreIndex, itemPrecioIndex, itemDescripcionIndex);
        let seccion = document.getElementById(categoriaIndex.toLowerCase());
        if (seccion) {
            let slider = seccion.querySelector(".productos__slider");
            if (slider) {
                let nextButton = slider.querySelector(".next__item");
                if (nextButton) {
                    slider.insertBefore(sliderItem, nextButton);
                } else {
                    slider.append(sliderItem);
                }
                updateAction();
                itemShowAll();
            }
        }
        localStorage.removeItem("nuevoProducto");
    }
};

window.addEventListener("load", agregarIndex);