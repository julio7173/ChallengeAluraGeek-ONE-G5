let licoresSlider = document.querySelector(".licores__slider");
let licorImgs = document.querySelectorAll(".licor__img");
let verMas__licor = document.querySelectorAll(".verMas__licor");

let licorVerMasVisible = false;

licorImgs.forEach((licorImg) => {
  licorImg.addEventListener("click", (e) => {
    if (!licorVerMasVisible) {
      verMas__licor.forEach((verMas__licor) => {
        licoresSlider.style.height = "40rem";
        verMas__licor.style.display = "block";
      });
      licorVerMasVisible = true;
    } else {
      verMas__licor.forEach((verMas__licor) => {
        licoresSlider.style.height = "30rem";
        verMas__licor.style.display = "none";
      });
      licorVerMasVisible = false;
    }
  });
});