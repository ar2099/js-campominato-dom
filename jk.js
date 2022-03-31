//ANCHOR ESTRAIAMO DIFFICOLTA E GENERIAMO NUMERO DI CELLE
let difficolta = pannello.value;
if (difficolta == "media") {
    numeroCelle = 81;
} else if (difficolta == "facile") {
    numeroCelle = 100;
} else {
    numeroCelle = 49;
}

//ANCHOR GENERIAMO LISTA NUMERI
let numerazioneCelle = casual(numeroCelle)
let numeriBombe = scegli(numeroCelle, 16)
console.log(numerazioneCelle)
console.log(numeriBombe)


//ANCHOR CICLO GENERAZIONE CELLE
for (let i = 0; i < numeroCelle; i++) {

    let box = document.createElement("div");
    bomb = document.createElement("div")





    //Generazione elementi diversi (bomb e box)
    if (numeriBombe.includes(numerazioneCelle[i])) {
        grid.appendChild(bomb);
        bomb.innerHTML = `<span>${numerazioneCelle[i]}</span>`
    }
    else {
        grid.appendChild(box);
        box.innerHTML = `<span>${numerazioneCelle[i]}</span>`
    }

    //Aggiunta classi a seconda delle dimensioni
    if (difficolta == "media") {
        box.classList.add("box9")
        bomb.classList.add("box9")
    } else if (difficolta == "facile") {
        box.classList.add("box10")
        bomb.classList.add("box10")
    } else {
        box.classList.add("box7")
        bomb.classList.add("box7")
    }}

    document.get