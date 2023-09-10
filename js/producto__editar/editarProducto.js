let inputCategoria = document.querySelector(".producto__categoria");
let inputNombre = document.querySelector(".producto__nombre");
let inputPrecio = document.querySelector(".producto__precio");
let inputDescripcion = document.querySelector(".producto__descripcion");
let botonAgregar = document.querySelector(".producto__agregar");
let botonEditar = document.querySelector(".producto__editar");
let tituloEditar = document.querySelector(".producto__titulo");

window.addEventListener("load", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let edit = urlParams.get("edit");
  if (edit === "true") {
    let json = localStorage.getItem("editarProducto");
    if (json) {
      let datos = JSON.parse(json);
      inputCategoria.value = datos.categoria;
      inputNombre.value = datos.nombre;
      inputPrecio.value = datos.precio;
      inputDescripcion.value = datos.descripcion;
      tituloEditar.textContent = "Editar producto";
      botonAgregar.style.display = "none";
      botonEditar.style.display = "block";
    }
  }
});