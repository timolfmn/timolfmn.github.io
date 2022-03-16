
const lista = []

document.addEventListener("DOMContentLoaded", buttonCheck)
function buttonCheck() {
    if (localStorage.getItem('valinta1')) {
        document.getElementById("lisaa").style.display = "none";
    }
    else {
        document.getElementById("poista").style.display="none";
    }
    if (localStorage.getItem('valinta2')){
        document.getElementById("lisaa2").style.display = "none";
    }
    else {
        document.getElementById("poista2").style.display="none";
    }
    if (localStorage.getItem('valinta3')){
        document.getElementById("lisaa3").style.display = "none";
    }
    else {
        document.getElementById("poista3").style.display="none";
    }
}

function valinta1() {
    localStorage.setItem('valinta1', 'Juusto');
}

function valinta2() {
    localStorage.setItem('valinta2', 'Kastike');
}

function poista1() {
    localStorage.removeItem('valinta1');
}

function poista23() {
    localStorage.removeItem('valinta2');
}

function valinta4() {
    localStorage.setItem('valinta3', 'Kinkku');
}
function poista4() {
    localStorage.removeItem('valinta3');
}

function vahvistus(){
    document.getElementById("taytelista").textContent += localStorage.getItem("valinta1") += localStorage.getItem("valinta2") += localStorage.getItem("valinta3");
}