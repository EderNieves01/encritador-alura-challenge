//capturando botones
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');

//capturando text area
const textArea = document.querySelector('#textArea');

//capturando divs
const divNoResultado = document.querySelector('.no-resultado');
const divResultado = document.querySelector('.div-resultado');



btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);

function encriptar(){
    let p = document.querySelector('#textEncriptado');
    divNoResultado.style.display = "none";
    divResultado.style.display = "block";
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
    text.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    p.textContent = text;
}

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my' && "dog", 'cat'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

function reemplazarLetras(palabra) {
    // Reemplazar 'o' con 'ober' y 'a' con 'ai'
    var nuevaPalabra = palabra.replace(/o/g, 'ober').replace(/a/g, 'ai');
    return nuevaPalabra;
  }
  
  // Ejemplo de uso
  var palabraOriginal = "Hola";
  var palabraModificada = reemplazarLetras(palabraOriginal);
  
  console.log("Palabra original:", palabraOriginal);
  console.log("Palabra modificada:", palabraModificada);
var palabra = "hola alura";
  var palabraConvertida = palabra
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    console.log(palabraConvertida)