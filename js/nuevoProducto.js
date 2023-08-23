const dropArea = document.querySelector(".dragNdrop__area");
let dragText = dropArea.querySelector(".producto__mensaje-1");
let rigthButton = dropArea.querySelector(".producto__boton-1");
let failButton = dropArea.querySelector(".producto__boton-2");

let file;

rigthButton.onclick = ()=>{
    failButton.click();
};

failButton.addEventListener("change", function(){
    file = this.files[0];
    showFile();
    dropArea.classList.add("active");
});

dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta para cargar la imagen";
});

dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta para cargar la imagen";
});

dropArea.addEventListener("drop", (event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    showFile();
});

function showFile(){
    let fileType = file.type;
    let validExtensions = ["image/png", "image/jpeg", "image/jpg"];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            console.log(fileURL);
            let imgTag = `<img src="${fileURL}" class="producto__img">`;
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    }else{
        alert("This is not an image file");
        dropArea.classList.remove("active");
    }
}