let botonesEditar = document.querySelectorAll(".editar__img-admin");

botonesEditar.forEach(boton => {
    boton.addEventListener("click", editarProducto);
});

function editarProducto(evento) {
    let btnEdit = evento.target;
    let producto = btnEdit.closest(".producto__img-admin");

    let imagen = producto.querySelector(".todos__producto").src;
    let categoria = producto.closest("#licores") ? "licores" : producto.closest("#tragos") ? "tragos" : "refrescos";
    let nombre = producto.querySelector(".detalle__nombre").textContent;
    let precio = producto.querySelector(".detalle__precio").textContent;
    let descripcion = producto.querySelector(".detalle__descripcion").textContent;

    let datos = {
        imagen: imagen,
        categoria: categoria,
        nombre: nombre,
        precio: +precio.replace(" BS.", ""),
        descripcion: descripcion
    };
    
    let json = JSON.stringify(datos);
    localStorage.setItem("editarProducto", json);
    window.location.href = "nuevoProducto.html?edit=true";
}