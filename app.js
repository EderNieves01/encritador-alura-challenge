//capturando botones
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');

//capturando text area
const textArea = document.querySelector('#textArea');

//capturando divs


function ocultarDivs(){
const divNoResultado = document.querySelector('.no-resultado');
const divResultado = document.querySelector('.div-resultado');  
 divNoResultado.style.display = "none";
 divResultado.style.display = "block";
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);

function encriptar(){
    ocultarDivs();
    let text = textArea.value;
    encriptarText(text)
   
}

function desencriptar(){
    ocultarDivs();
    let text = textArea.value;
    desencriptarText(text);
}

function encriptarText(text){
    let p = document.querySelector('#textEncriptado');
    var result = "";
    for (let i = 0; i <= text.length; i++) {
        if(text.charAt(i) === "a"){
          result += text.charAt(i).replace("a", 'ai');  
        }else if(text.charAt(i) === "e"){
            result += text.charAt(i).replace("e", "enter") 
        }else if(text.charAt(i) === "i"){
            result += text.charAt(i).replace("i", "items")
        }else if(text.charAt(i) === "o"){
            result += text.charAt(i).replace("o", "ober")
        }else if(text.charAt(i) === "u"){
            result += text.charAt(i).replace("u", "ufat")
        }else{
            result += text.charAt(i)
        }
    }
    p.textContent = result;
}

function desencriptarText(text){
    let p = document.querySelector('#textEncriptado');
    let textDesencriptado = text.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    console.log(textDesencriptado)
    p.textContent = textDesencriptado;
}
