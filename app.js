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
