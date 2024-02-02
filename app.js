//capturando botones
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');

//capturando text area
const textArea = document.querySelector('#textArea');

//capturando divs
const divNoResultado = document.querySelector('.no-resultado');
const divResultado = document.querySelector('.div-resultado');



btnEncriptar.addEventListener('click', encriptar);

function encriptar(){
    let p = document.querySelector('#textEncriptado');
    divNoResultado.style.display = "none";
    divResultado.style.display = "block";
    p.textContent = textArea.value;
}


// divResultado.style.display = "none";
// divNoResultado.style.display = "block";
// console.log(divResultado)