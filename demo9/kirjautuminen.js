document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if (localStorage.getItem("kirjautunut") === "kylla"){
        document.getElementById("tervetulo_teksti").textContent += ', ' + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
    }
    else {
        document.getElementById("uloskirj").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function ulos() {
    localStorage.clear();
}