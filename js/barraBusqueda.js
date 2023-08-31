let searchBar = document.getElementById("barraBusqueda");
let searchButton = document.getElementById("botonBusqueda");

// variable para guardar el índice de la sección y el índice del producto de la última búsqueda
let ultimaBusqueda = null;

function buscarItem(nombre) {
  // variable para indicar si se encontró el item o no
  let encontrado = false;
  // recorrer las secciones
  for (let i = 0; i < itemsProducts.length; i++) {
    // recorrer los productos de cada sección
    for (let j = 0; j < itemsProducts[i].length; j++) {
      // obtener el nombre del producto actual y convertirlo a minúsculas
      let nombreProducto = itemsProducts[i][j].querySelector(".item__nombre").textContent.toLowerCase();
      // comparar el nombre del producto con el nombre a buscar convertido a minúsculas usando el método includes
      if (nombreProducto.includes(nombre.toLowerCase())) {
        // llamar a la función itemShow para mostrar el item
        itemShow(i, j);
        // simular un clic en la imagen del item para mostrar el div verMas
        sliderImgs[i][j].click();
        // cambiar el valor de encontrado a verdadero
        encontrado = true;
        // llamar a la función irASeccion para desplazar la página hasta la sección donde se encontró el item
        irASeccion(i);
        // verificar si la búsqueda actual es igual a la última búsqueda
        if (ultimaBusqueda !== null && ultimaBusqueda[0] === i && ultimaBusqueda[1] === j) {
          // no hacer nada más, ya que el item y el div verMas ya están mostrados
          break;
        }
        // verificar si ultimaBusqueda tiene un valor distinto de null
        if (ultimaBusqueda !== null) {
          // ocultar el div verMas de la última búsqueda usando los índices guardados en ultimaBusqueda
          verMases[ultimaBusqueda[0]][ultimaBusqueda[1]].style.display = "none";
          // cambiar el alto del contenedor de la última sección a 30rem
          sliders[ultimaBusqueda[0]].style.height = "30rem";
        }
        // actualizar el valor de ultimaBusqueda con los índices de la búsqueda actual
        ultimaBusqueda = [i, j];
        // salir de los bucles
        break;
      }
    }
    if (encontrado) {
      break;
    }
  }
  // si no se encontró el item, mostrar un mensaje de alerta al usuario
  if (!encontrado) {
    alert("No se encontró ningún item con ese nombre");
  }
}

function irASeccion(index) {
  // obtener la distancia entre el inicio de la página y el inicio de la sección
  let distancia = sliders[index].getBoundingClientRect().top;
  // desplazar la página hasta esa distancia con una transición suave
  window.scrollTo({
    top: distancia,
    behavior: "smooth",
  });
}

// En la página que no es index.html 
searchButton.addEventListener("click", function () {
  // Obtener la URL de la página actual 
  let url = window.location.href;
  // Verificar si la URL termina con index.html 
  if (url.endsWith("index.html")) {
    // Si es así, ejecutar la función de búsqueda normalmente 
    let nombre = searchBar.value;
    buscarItem(nombre);
  } else {
    // Si no, guardar el valor de la barra de búsqueda en sessionStorage 
    let nombre = searchBar.value;
    sessionStorage.setItem("busqueda", nombre);
    // Redirigir a index.html 
    window.location.href = "index.html";
  }
});

// En index.html 
window.addEventListener("load", function () {
  // Verificar si hay algún valor guardado en sessionStorage 
  let nombre = sessionStorage.getItem("busqueda");
  if (nombre) {
    // Si hay, ejecutar la función buscarItem con ese valor 
    buscarItem(nombre);
    // Borrar el valor de sessionStorage 
    sessionStorage.removeItem("busqueda");
  }
});