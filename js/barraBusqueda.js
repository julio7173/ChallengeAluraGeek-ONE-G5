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

searchButton.addEventListener("click", function () {
  // obtener el valor del input de búsqueda
  let nombre = searchBar.value;
  // llamar a la función buscarItem con el nombre como parámetro
  buscarItem(nombre);
});