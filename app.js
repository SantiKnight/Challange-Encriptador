let mensaje = document.querySelector("#texto-input");
let salida = document.querySelector("#salida");

let btnEncriptar = document.querySelector(".boton-encriptar");
let btnDesencriptar = document.querySelector(".boton-desencriptar");
let btnCopiarTexto = document.querySelector(".btn-copiar");

let letras_incorrectas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóú";

function tiene_letras_incorrectas(texto){
   for(i=0; i<texto.length; i++){
      if (letras_incorrectas.indexOf(texto.charAt(i),0)!=-1){
        return true;
      }
   }
   return false;
}

let numeros="0123456789";

function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

btnEncriptar.addEventListener("click", function(e){
    e.preventDefault();
    
    let texto = encriptarTexto();
    salida.value = texto;
    if(texto!==""){
        btnCopiarTexto.style.display = "block";
    }
});

btnDesencriptar.addEventListener("click", function() {

    let texto = desencriptarTexto();
    salida.value = texto;
    btnCopiarTexto.style.display = "block";
});

btnCopiarTexto.addEventListener("click", function(e){
    copiarTexto();
    salida.value = "";
});

function encriptarTexto() {
    if(tiene_letras_incorrectas(mensaje.value) || tiene_numeros(mensaje.value)){
        alert("Ingrese texto válido, sin mayúsculas, tíldes ni numeros");
        return "";
    }
    else{
        let textoEncriptar = limpiarTexto(mensaje.value);
        let textoEncriptado = mensaje.value;

        textoEncriptado = textoEncriptar.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")
        
        mensaje.value = "";
        return textoEncriptado;
    }
}

function desencriptarTexto() {
    if(tiene_letras_incorrectas(mensaje.value) || tiene_numeros(mensaje.value)){
        alert("Ingrese texto válido, sin mayúsculas, tíldes ni numeros");
        return "";
    }
    else{
        let textoEncriptar = limpiarTexto(mensaje.value);
        let textoDesencriptado = mensaje.value;

        textoDesencriptado = textoEncriptar.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u")

        mensaje.value="";
        return textoDesencriptado;
    } 
}

function copiarTexto() {
    salida.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    btnCopiarTexto.style.display = "none";

    alert("Texto copiado!");
}

function limpiarTexto(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();

}