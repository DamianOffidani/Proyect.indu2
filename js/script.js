const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      cont = document.querySelector("#cont"),
      contImg = document.querySelectorAll(".contimg");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

/*setInterval(() => {
    moveToRight()
}, 5000);*/


let operacion = 0,
    counter = 0,
    widthImg = 100 / contImg.length;

function moveToRight() {
    if (counter >= contImg.length-1) {
        counter = 0;
        operacion = 0;
    cont.style.transform = `translate(-${operacion}%)`;
    cont.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    cont.style.transform = `translate(-${operacion}%)`;
    cont.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = contImg.length-1;
        operacion = widthImg * (contImg.length-1)
        cont.style.transform = `translate(-${operacion}%)`;
        cont.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    cont.style.transform = `translate(-${operacion}%)`;
    cont.style.transition = "all ease .6s"
    
    
}   
.escondido {
    display: none;
}