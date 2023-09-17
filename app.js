const btnAjouter = document.getElementById("btn-ajouter");
const btnEffacer = document.getElementById("btn-effacer");
const inputIntitule = document.getElementById("intitule");
const inputSomme = document.getElementById("somme");
const listDep = document.getElementById("list-dep");
const totalDep = document.getElementById("allDep");

let sommeDepenses= 0;

btnAjouter.addEventListener("click", () => {
    const intituleValue = inputIntitule.value;
    const sommeValue = inputSomme.value;

    console.log(intituleValue,sommeValue);
    //console.log(typeof sommeValue);

    if (!intituleValue.trim().length || !sommeValue.trim().length) {
        createAlert();
        return;
      }

    const newLabel = document.createElement("ion-label");
    // newLabel.textContent  = intituleValue + ":" + sommeValue + " $"; //Niveau débutant
    newLabel.textContent  = `${intituleValue} : ${sommeValue} $`;

    const newItem  = document.createElement("ion-item");
    newItem.appendChild(newLabel);
    listDep.appendChild(newItem);

//Astuce: pour Convertir un number en chaine de caractères, tu ajoute + à la variable 
    // sommeDepenses += +sommeValue;


    sommeDepenses += Number(sommeValue);
    totalDep.textContent = `${sommeDepenses} $`;
    effacer();

});

function effacer() {
    inputIntitule.value ="";
    inputSomme.value ="";
}
btnEffacer.addEventListener("click", effacer);

function createAlert() {
    console.log("Coucou");
    let newAlert = document.createElement("ion-alert");
    newAlert.header = "Erreur";
    newAlert.subHeader = "Veuillez saisir des données";
    newAlert.buttons = ["OK", "NO", "YES"];
    newAlert.present();
    document.body.appendChild(newAlert);
}