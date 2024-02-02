//capturando botones
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');

//capturando text area
const textArea = document.querySelector('#textArea');

//capturando divs
// let divNoResultado = document.querySelector('.no-resultado');
// let divResultado = document.querySelector('.div-resultado');



btnEncriptar.addEventListener('click', encriptar);

function encriptar(){
    const textArea = document.querySelector('#textArea');
    let p = document.querySelector('#textEncriptado');
    let divNoResultado = document.querySelector('.no-resultado');
    let divResultado = document.querySelector('.div-resultado');
    divNoResultado.style.display = "none";
    divResultado.style.display = "block";
    p.textContent = textArea.value;
}


// divResultado.style.display = "none";
// divNoResultado.style.display = "block";
// console.log(divResultado)