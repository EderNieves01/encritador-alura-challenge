//capturando botones

const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const textArea = document.querySelector('#textArea');

btnEncriptar.addEventListener('click', probando);

function probando(){
    console.log(textArea.value)
}
let divNoResultado = document.querySelector('.no-resultado');
let divResultado = document.querySelector('.div-resultado');

divResultado.style.display = "none";
divNoResultado.style.display = "block";
console.log(divResultado)