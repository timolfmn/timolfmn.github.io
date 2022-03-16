//pizzan täytteet tulee tähän
const lista = []

//lisää täytteet listaan ja ottaa lisäysnapin pois näkyvistä
function valinta1() {
    lista.push('Juusto');
    document.getElementById("lisaa").style.display="none";
    document.getElementById("vahvistus1").style.display = "block";
}
function valinta2() {
    lista.push('Pepperoni');
    document.getElementById("lisaa2").style.display="none";
    document.getElementById("vahvistus2").style.display = "block";
}
function valinta4() {
    lista.push('Kinkku');
    document.getElementById("lisaa3").style.display="none";
    document.getElementById("vahvistus3").style.display = "block";
}
function valinta5() {
    lista.push('Kana');
    document.getElementById("lisaa4").style.display="none";
    document.getElementById("vahvistus4").style.display = "block";
}
function valinta6() {
    lista.push('Ananas');
    document.getElementById("lisaa5").style.display="none";
    document.getElementById("vahvistus5").style.display = "block";
}

//tyhjentää listan ja localstoragen ja laittaa napit taas näkyviin
function poistaKaikki(){
    lista.length=0;
    document.getElementById("lisaa").style.display="block";
    document.getElementById("lisaa2").style.display="block";
    document.getElementById("lisaa3").style.display="block";
    document.getElementById("lisaa4").style.display="block";
    document.getElementById("lisaa5").style.display="block";
    document.getElementById("vahvistus1").style.display = "none";
    document.getElementById("vahvistus2").style.display = "none";
    document.getElementById("vahvistus3").style.display = "none";
    document.getElementById("vahvistus4").style.display = "none";
    document.getElementById("vahvistus5").style.display = "none";
    document.getElementById("taytelista").textContent = 'Sinun pizzasi: ';
    document.getElementById("vahvista").style.display="block";
    localStorage.removeItem('omapizza');
}

//vahvistaa valinnat, lisää localstorageen ja näyttää käyttäjälle mitä on valittu
function vahvistus(){
    console.log(lista);
    document.getElementById("taytelista").textContent += lista.join(', ');
    localStorage.setItem('omapizza', lista.join(', '));
    document.getElementById("vahvista").style.display="none";
    document.getElementById("seuraava").style.display="block";
}