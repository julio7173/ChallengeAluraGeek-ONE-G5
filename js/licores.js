let itemsLicor = document.querySelectorAll(".licores__slider .licores__item");
let nextLicor = document.getElementById("licorNext");
let prevLicor = document.getElementById("licorPrev");

let activeLicor = 5;

function loadShow() {
    let licor = 0;
    itemsLicor[activeLicor].style.transform = `none`;
    itemsLicor[activeLicor].style.zIndex = 1;
    itemsLicor[activeLicor].style.filter = "none";
    itemsLicor[activeLicor].style.opacity = 1;
    for (var i = activeLicor + 1; i < itemsLicor.length; i++) {
        licor++;
        itemsLicor[i].style.transform = `translateX(${120 * licor}px) scale(${1 - 0.2 * licor}) perspective(1rem) rotateY(-1deg)`;
        itemsLicor[i].style.zIndex = 0;
        itemsLicor[i].style.filter = "blur(5px)";
        itemsLicor[i].style.opacity = licor > 2 ? 0 : 0.6;
    }
    licor = 0;
    for (var i = activeLicor - 1; i >= 0; i--) {
        licor++;
        itemsLicor[i].style.transform = `translateX(${-120 * licor}px) scale(${1 - 0.2 * licor}) perspective(1rem) rotateY(1deg)`;
        itemsLicor[i].style.zIndex = 0;
        itemsLicor[i].style.filter = "blur(5px)";
        itemsLicor[i].style.opacity = licor > 2 ? 0 : 0.6;
    }
}
loadShow();

nextLicor.onclick = function(){
    activeLicor = activeLicor + 1 < itemsLicor.length ? activeLicor + 1 : activeLicor;
    loadShow();
}

prevLicor.onclick = function(){
    activeLicor = activeLicor - 1 >= 0 ? activeLicor - 1 : activeLicor;
    loadShow();
}