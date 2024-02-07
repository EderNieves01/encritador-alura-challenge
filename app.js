//capturando botones
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const btnCopiar = document.querySelector('#btncopiar');
//capturando text area
const textArea = document.querySelector('#textArea');

//Esta function permite ocultar y mostrar el display de los divs
function ocultarDivs(){

const divNoResultado = document.querySelector('.no-resultado');
const divResultado = document.querySelector('.div-resultado');  

 divNoResultado.style.display = "none";
 divResultado.style.display = "block";
}

//Eventos y sus botones
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiar.addEventListener("click", copiarText)

//Esta function se activa al pulsar el boton btnEncriptar
function encriptar(){

    ocultarDivs();
    let text = textArea.value;
    encriptarText(text)
   
}

//Esta function se activa al pulsar el boton btnDesencriptar
function desencriptar(){
    ocultarDivs();
    let text = textArea.value;
    desencriptarText(text);
}

//Con esta function permite encriptar el texto con un bucle for y los metodos .charAt() y .replace()
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

//Con esta function permite encriptar el texto con .replace() mas complejo sin usar el bucle for convinado con .chatAt()
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

//con el metodo  navigator.clipboard.writeText(p) podemos copiar algun texto
//validando permiso desde su api asi utilizamos la captura de errores con promesas try catch
function copiarText(){
    let p = document.querySelector('#textEncriptado').innerHTML;
 try{
  await  navigator.clipboard.writeText(p);
  console.log('Contenido copiado al portapapeles', p);
 } catch(error){
       console.error('Error al copiar', error);
 }
}