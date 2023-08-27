let refrescosSlider = document.querySelector(".refrescos__slider");
let refrescoImgs = document.querySelectorAll(".refresco__img");
let verMas__refresco = document.querySelectorAll(".verMas__refresco");

let refrescoVerMasVisible = false;

refrescoImgs.forEach((refrescoImg) => {
    refrescoImg.addEventListener("click", (e) => {
    if (!refrescoVerMasVisible) {
        verMas__refresco.forEach((verMas__refresco) => {
            refrescosSlider.style.height = "40rem";
        verMas__refresco.style.display = "block";
      });
      refrescoVerMasVisible = true;
    } else {
        verMas__refresco.forEach((verMas__refresco) => {
            refrescosSlider.style.height = "30rem";
        verMas__refresco.style.display = "none";
      });
      refrescoVerMasVisible = false;
    }
  });
});