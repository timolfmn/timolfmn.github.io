//juomavalinnat tulee tähän
const lista = []

//lisää juomat listaan ja ottaa lisäysnapin pois näkyvistä
function valinta1() {
    //lukee checkboxit
    const check1=document.getElementById('colatolkki')
    const check2=document.getElementById('colapienipullo')
    const check3=document.getElementById('colaisopullo')
    if (check1.checked===true){
        lista.push('Coca-Cola 0.33L');
    }
    if (check2.checked===true){
        lista.push('Coca-Cola 0.5L');
    }
    if (check3.checked===true){
        lista.push('Coca-Cola 1.5L');
    }
    document.getElementById("lisaa").style.display="none";
    document.getElementById("vahvistus1").style.display = "block";
}
function valinta2() {
    //lukee checkboxit
    const check1=document.getElementById('fantatolkki')
    const check2=document.getElementById('fantapienipullo')
    const check3=document.getElementById('fantaisopullo')
    if (check1.checked===true){
        lista.push('Fanta 0.33L');
    }
    if (check2.checked===true){
        lista.push('Fanta 0.5L');
    }
    if (check3.checked===true){
        lista.push('Fanta 1.5L');
    }
    document.getElementById("lisaa2").style.display="none";
    document.getElementById("vahvistus2").style.display = "block";
}
function valinta4() {
    //lukee checkboxit
    const check1=document.getElementById('spritetolkki')
    const check2=document.getElementById('spritepienipullo')
    const check3=document.getElementById('spriteisopullo')
    if (check1.checked===true){
        lista.push('Sprite 0.33L');
    }
    if (check2.checked===true){
        lista.push('Sprite 0.5L');
    }
    if (check3.checked===true){
        lista.push('Sprite 1.5L');
    }
    document.getElementById("lisaa3").style.display="none";
    document.getElementById("vahvistus3").style.display = "block";
}
function valinta5() {
    //lukee checkboxit
    const check2=document.getElementById('vesipienipullo')
    const check3=document.getElementById('vesiisopullo')
    if (check2.checked===true){
        lista.push('Kivennäisvesi 0.5L');
    }
    if (check3.checked===true){
        lista.push('Kivennäisvesi 1.5L');
    }
    document.getElementById("lisaa4").style.display="none";
    document.getElementById("vahvistus4").style.display = "block";
}
//tyhjentää listan ja localstoragen ja laittaa napit taas näkyviin
function poistaKaikki(){
    lista.length=0;
    document.getElementById("lisaa").style.display="block";
    document.getElementById("lisaa2").style.display="block";
    document.getElementById("lisaa3").style.display="block";
    document.getElementById("lisaa4").style.display="block";
    document.getElementById("vahvistus1").style.display = "none";
    document.getElementById("vahvistus2").style.display = "none";
    document.getElementById("vahvistus3").style.display = "none";
    document.getElementById("vahvistus4").style.display = "none";
    document.getElementById("juomalista").textContent = 'Juomavalintasi: ';
    document.getElementById("vahvista").style.display="block";
    localStorage.removeItem('juomat');
}

//vahvistaa valinnat, lisää localstorageen ja näyttää käyttäjälle mitä on valittu
function vahvistus(){
    console.log(lista);
    document.getElementById("juomalista").textContent += lista.join(', ');
    localStorage.setItem('juomat', lista.join(', '));
    document.getElementById("vahvista").style.display="none";
    document.getElementById("seuraava").style.display="block";
}