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
    let p = document.querySelector('#textEncriptado');
    ocultarDivs();
    let text = textArea.value;
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
function desencriptar(){
    let p = document.querySelector('#textEncriptado');
    divNoResultado.style.display = "none";
    divResultado.style.display = "block";
    let text = textArea.value;
    let textDesencriptado = text.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    console.log(textDesencriptado)
    p.textContent = textDesencriptado;
}


function reemplazarLetras(palabra) {
    // Reemplazar 'o' con 'ober' y 'a' con 'ai'
    var nuevaPalabra = palabra.replace(/o/g, 'ober').replace(/a/g, 'ai');
    return nuevaPalabra;
  }
  

  function convertirLetras(palabra) {
    var palabraConvertida = palabra
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    return palabraConvertida;
  }
