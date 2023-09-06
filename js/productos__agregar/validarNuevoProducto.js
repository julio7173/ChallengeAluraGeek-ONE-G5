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

let agregarAdmin = function () {
  let nuevoProductoAdminJSON = localStorage.getItem("nuevoProductoAdmin");
  if (nuevoProductoAdminJSON) {
    let nuevoProductoAdmin = JSON.parse(nuevoProductoAdminJSON);
    // Usar la propiedad imagen que contiene la cadena de datos URL
    let imagenAdmin = nuevoProductoAdmin.imagen;
    let nombreAdmin = nuevoProductoAdmin.nombre;
    let precioAdmin = nuevoProductoAdmin.precio;
    let descripcionAdmin = nuevoProductoAdmin.descripcion;
    // Crear un div con la clase "producto__img-admin"
    let productoImgAdmin = document.createElement("div");
    productoImgAdmin.classList.add("producto__img-admin");
    // Crear un elemento img para mostrar la imagen del producto
    let itemImgAdmin = document.createElement("img");
    itemImgAdmin.classList.add("todos__producto");
    // Asignar la cadena de datos URL al atributo src
    itemImgAdmin.src = imagenAdmin;
    itemImgAdmin.alt = nombreAdmin;
    // Crear un div con la clase "producto__detalle" para mostrar el nombre, el precio y la descripción del producto
    let productoDetalle = document.createElement("div");
    productoDetalle.classList.add("producto__detalle");
    let itemNombreAdmin = document.createElement("h2");
    itemNombreAdmin.classList.add("detalle__nombre");
    itemNombreAdmin.textContent = nombreAdmin;
    let itemPrecioAdmin = document.createElement("p");
    itemPrecioAdmin.classList.add("detalle__precio");
    itemPrecioAdmin.textContent = precioAdmin + " BS.";
    let itemDescripcionAdmin = document.createElement("p");
    itemDescripcionAdmin.classList.add("detalle__descripcion");
    itemDescripcionAdmin.textContent = descripcionAdmin;
    // Crear un div con la clase "producto__botones-admin" para mostrar los botones de editar y eliminar
    let productoBotonesAdmin = document.createElement("div");
    productoBotonesAdmin.classList.add("producto__botones-admin");
    // Crear los botones de editar y eliminar
    let editarImgAdmin = document.createElement("button");
    editarImgAdmin.classList.add("editar__img-admin");
    let eliminarImgAdmin = document.createElement("button");
    eliminarImgAdmin.classList.add("eliminar__img-admin");
    // Agregar los elementos creados al div principal
    productoImgAdmin.append(itemImgAdmin, productoDetalle, productoBotonesAdmin);
    productoDetalle.append(itemNombreAdmin, itemPrecioAdmin, itemDescripcionAdmin);
    productoBotonesAdmin.append(editarImgAdmin, eliminarImgAdmin);
    // Buscar el div con la clase "todos__imagenes"
    let todosImagenes = document.querySelector(".todos__imagenes");
    if (todosImagenes) {
      // Agregar el nuevo producto al final del div
      todosImagenes.append(productoImgAdmin);
      localStorage.removeItem("nuevoProducto");
    }
  }
};

// Añadir los eventos de carga a la ventana
window.addEventListener("load", agregarIndex);
window.addEventListener("load", agregarAdmin);