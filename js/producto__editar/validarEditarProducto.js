// Esta función actualiza los productos con los nuevos datos
function updateProducts(dataProduct) {
  // Obtiene el objeto datos del localStorage
  let json = localStorage.getItem("editarProducto");
  if (json) {
    let datos = JSON.parse(json);
    // Busca el producto con el mismo id que el objeto datos
    let index = dataProduct.findIndex(product => product.id === datos.id);
    if (index !== -1) {
      // Reemplaza el producto con el objeto datos
      dataProduct[index] = datos;
    }
  }
  return dataProduct;
}

// Esta función genera los productos usando la función map
function buildList(containerId, sourceProduct) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";
  var html = "";
  
  // Actualiza los productos con los nuevos datos
  this[sourceProduct] = updateProducts(this[sourceProduct]);
  
  // Crea un nuevo arreglo con el HTML de cada producto
  let htmlProducts = this[sourceProduct].map(product => this.buildHtmlProduct(product));
  
  // Une el arreglo en una sola cadena HTML
  html = htmlProducts.join("");
  
  container.innerHTML = html;
}