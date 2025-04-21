let nav = document.querySelector("#nav_bar");
let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");


abrir. addEventListener("click", ()=>{
    console.log("Abrir");
    nav.classList.add("visible");

});

cerrar. addEventListener("click", ()=>{
    console.log("Cerrar");
    nav.classList.remove("visible");

});

