let itemsRefresco = document.querySelectorAll(".refrescos__slider .refrecos__item");
let nextRefresco = document.getElementById("refrescoNext");
let prevRefresco = document.getElementById("refrescoPrev");

let activeRefresco = 4;

function refrescoShow() {
    let refresco = 0;
    itemsRefresco[activeRefresco].style.transform = `none`;
    itemsRefresco[activeRefresco].style.zIndex = 1;
    itemsRefresco[activeRefresco].style.filter = "none";
    itemsRefresco[activeRefresco].style.opacity = 1;
    for (var i = activeRefresco + 1; i < itemsRefresco.length; i++) {
        refresco++;
        itemsRefresco[i].style.transform = `translateX(${120 * refresco}px) scale(${1 - 0.2 * refresco}) perspective(1rem) rotateY(-1deg)`;
        itemsRefresco[i].style.zIndex = 0;
        itemsRefresco[i].style.filter = "blur(5px)";
        itemsRefresco[i].style.opacity = refresco > 2 ? 0 : 0.6;
    }
    refresco = 0;
    for (var i = activeRefresco - 1; i >= 0; i--) {
        refresco++;
        itemsRefresco[i].style.transform = `translateX(${-120 * refresco}px) scale(${1 - 0.2 * refresco}) perspective(1rem) rotateY(1deg)`;
        itemsRefresco[i].style.zIndex = 0;
        itemsRefresco[i].style.filter = "blur(5px)";
        itemsRefresco[i].style.opacity = refresco > 2 ? 0 : 0.6;
    }
}
refrescoShow();

nextRefresco.onclick = function(){
    activeRefresco = activeRefresco + 1 < itemsRefresco.length ? activeRefresco + 1 : activeRefresco;
    refrescoShow();
}

prevRefresco.onclick = function(){
    activeRefresco = activeRefresco - 1 >= 0 ? activeRefresco - 1 : activeRefresco;
    refrescoShow();
}