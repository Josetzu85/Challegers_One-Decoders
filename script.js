const mensajeIngresado = document.querySelector(".section1-mensaje");
const resultado = document.querySelector(".section2-resultado");
const btnEncriptar = document.querySelector(".containerBtn1-btnEncriptar");
const btnDesencriptar = document.querySelector(".containerBtn1-btnDesencriptar");
const btnCopiar = document.querySelector(".containerBtn2-btnCopy");
const btnEscuchar = document.querySelector(".containerBtn2-btnEscuchar");
const tarjeta1 = document.querySelector(".section1");

function encriptar() {
    var mensaje = mensajeIngresado.value;
    var mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("o", "ober")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");

    resultado.value = mensajeEncriptado;
}

function desencriptar() {
    var mensajeEncriptado = mensajeIngresado.value;
    var mensaje = mensajeEncriptado
        .replaceAll("enter", "e")
        .replaceAll("ober", "o")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

    resultado.value = mensaje;
}

function copiar() {
    var mensajeEncriptado = resultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    mensajeIngresado.value = "";
    mensajeIngresado.focus();
    resultado.value = "";
}

function escuchar() {
    var mensajeEncriptado = resultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnEscuchar.onclick = escuchar;
