let mensaje = document.querySelector("#texto-input");
let salida = document.querySelector("#salida");

let btnEncriptar = document.querySelector(".boton-encriptar");
let btnDesencriptar = document.querySelector(".boton-desencriptar");
let btnCopiarTexto = document.querySelector(".btn-copiar");

btnEncriptar.addEventListener("click", function(e){
    e.preventDefault();
    
    let texto = encriptarTexto();
    salida.value = texto;
    btnCopiarTexto.style.display = "block";
});

btnDesencriptar.addEventListener("click", function() {

    let texto = desencriptarTexto();
    salida.value = texto;
    btnCopiarTexto.style.display = "block";
});

btnCopiarTexto.addEventListener("click", function(e){

    copiarTexto();
});

function encriptarTexto() {
    let textoEncriptar = limpiarTexto(mensaje.value);
    let textoEncriptado = mensaje.value;

    textoEncriptado = textoEncriptar.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")

    return textoEncriptado;
}

function desencriptarTexto() {
    let textoEncriptar = limpiarTexto(mensaje.value);
    let textoDesencriptado = mensaje.value;

    textoDesencriptado = textoEncriptar.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")

    return textoDesencriptado;
}

function copiarTexto() {
    salida.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    btnCopiarTexto.style.display = "none"

    alert("texto copiado!");
}

function limpiarTexto(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();

}