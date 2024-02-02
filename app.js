//capturando botones

const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');

btnEncriptar.addEventListener('click', probando);

function probando(){
    console.log("entrando")
}
let divNoResultado = document.querySelector('.no-resultado');
let divResultado = document.querySelector('.div-resultado');

divResultado.style.display = "none";
divNoResultado.style.display = "block";
console.log(divResultado)