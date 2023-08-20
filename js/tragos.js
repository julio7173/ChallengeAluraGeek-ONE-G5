let itemsTrago = document.querySelectorAll(".tragos__slider .tragos__item");
let nextTrago = document.getElementById("tragoNext");
let prevTrago = document.getElementById("tragoPrev");

let activeTrago = 7;

function tragoShow() {
    let trago = 0;
    itemsTrago[activeTrago].style.transform = `none`;
    itemsTrago[activeTrago].style.zIndex = 1;
    itemsTrago[activeTrago].style.filter = "none";
    itemsTrago[activeTrago].style.opacity = 1;
    for (var i = activeTrago + 1; i < itemsTrago.length; i++) {
        trago++;
        itemsTrago[i].style.transform = `translateX(${120 * trago}px) scale(${1 - 0.2 * trago}) perspective(1rem) rotateY(-1deg)`;
        itemsTrago[i].style.zIndex = 0;
        itemsTrago[i].style.filter = "blur(5px)";
        itemsTrago[i].style.opacity = trago > 2 ? 0 : 0.6;
    }
    trago = 0;
    for (var i = activeTrago - 1; i >= 0; i--) {
        trago++;
        itemsTrago[i].style.transform = `translateX(${-120 * trago}px) scale(${1 - 0.2 * trago}) perspective(1rem) rotateY(1deg)`;
        itemsTrago[i].style.zIndex = 0;
        itemsTrago[i].style.filter = "blur(5px)";
        itemsTrago[i].style.opacity = trago > 2 ? 0 : 0.6;
    }
}
tragoShow();

nextTrago.onclick = function(){
    activeTrago = activeTrago + 1 < itemsTrago.length ? activeTrago + 1 : activeTrago;
    tragoShow();
}

prevTrago.onclick = function(){
    activeTrago = activeTrago - 1 >= 0 ? activeTrago - 1 : activeTrago;
    tragoShow();
}