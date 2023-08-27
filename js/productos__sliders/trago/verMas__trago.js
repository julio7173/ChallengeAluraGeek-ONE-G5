let tragosSlider = document.querySelector(".tragos__slider");
let tragoImgs = document.querySelectorAll(".trago__img");
let verMas__trago = document.querySelectorAll(".verMas__trago");

let tragoVerMasVisible = false;

tragoImgs.forEach((tragoImg) => {
    tragoImg.addEventListener("click", (e) => {
    if (!tragoVerMasVisible) {
        verMas__trago.forEach((verMas__trago) => {
            tragosSlider.style.height = "40rem";
            verMas__trago.style.display = "block";
      });
      tragoVerMasVisible = true;
    } else {
        verMas__trago.forEach((verMas__trago) => {
            tragosSlider.style.height = "30rem";
            verMas__trago.style.display = "none";
      });
      tragoVerMasVisible = false;
    }
  });
});