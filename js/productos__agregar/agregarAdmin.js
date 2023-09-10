let contadorID = 37;

let agregarAdmin = function () {
    let nuevoProductoAdminJSON = localStorage.getItem("nuevoProductoAdmin");
    if (nuevoProductoAdminJSON) {
        let nuevoProductoAdmin = JSON.parse(nuevoProductoAdminJSON);
        // Usar la propiedad imagen que contiene la cadena de datos URL
        let imagenAdmin = nuevoProductoAdmin.imagen;
        let categoriaAdmin = nuevoProductoAdmin.categoria;
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
        editarImgAdmin.setAttribute("data-id", contadorID + 1);
        editarImgAdmin.setAttribute("onclick", "editarProducto(this.dataset.id)");
        let eliminarImgAdmin = document.createElement("button");
        eliminarImgAdmin.classList.add("eliminar__img-admin");
        // Agregar los elementos creados al div principal
        productoImgAdmin.append(itemImgAdmin, productoDetalle, productoBotonesAdmin);
        productoDetalle.append(itemNombreAdmin, itemPrecioAdmin, itemDescripcionAdmin);
        productoBotonesAdmin.append(editarImgAdmin, eliminarImgAdmin);

        // Buscar el div con el id igual a categoriaAdmin
        let categoriaDiv = document.getElementById(categoriaAdmin);
        if (categoriaDiv) {
            // Agregar el nuevo producto al final del div
            categoriaDiv.appendChild(productoImgAdmin);
        }

    }
};

window.addEventListener("load", agregarAdmin);