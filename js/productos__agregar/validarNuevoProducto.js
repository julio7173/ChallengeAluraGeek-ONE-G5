window.addEventListener("load", function () {
  let nuevoProductoJSON = localStorage.getItem("nuevoProducto");
  if (nuevoProductoJSON) {
    let nuevoProducto = JSON.parse(nuevoProductoJSON);
    // Usar la propiedad imagen que contiene la cadena de datos URL
    let imagen = nuevoProducto.imagen;
    let categoria = nuevoProducto.categoria;
    let nombre = nuevoProducto.nombre;
    let precio = nuevoProducto.precio;
    let descripcion = nuevoProducto.descripcion;
    let sliderItem = document.createElement("div");
    sliderItem.classList.add("slider__item");
    let itemImg = document.createElement("img");
    itemImg.classList.add("item__img");
    // Asignar la cadena de datos URL al atributo src
    itemImg.src = imagen;
    itemImg.alt = nombre;
    let itemVerMas = document.createElement("div");
    itemVerMas.classList.add("item__verMas");
    let itemNombre = document.createElement("h2");
    itemNombre.classList.add("item__nombre");
    itemNombre.textContent = nombre;
    let itemPrecio = document.createElement("p");
    itemPrecio.classList.add("item__precio");
    itemPrecio.textContent = precio + " BS.";
    let itemDescripcion = document.createElement("p");
    itemDescripcion.classList.add("item__descripcion");
    itemDescripcion.textContent = descripcion;
    sliderItem.append(itemImg, itemVerMas);
    itemVerMas.append(itemNombre, itemPrecio, itemDescripcion);
    let seccion = document.getElementById(categoria.toLowerCase());
    if (seccion) {
      let slider = seccion.querySelector(".productos__slider");
      if (slider) {
        let nextButton = slider.querySelector(".next__item");
        if (nextButton) {
          slider.insertBefore(sliderItem, nextButton);
        } else {
          slider.append(sliderItem);
        }
      }
    }
    localStorage.removeItem("nuevoProducto");
  }
});