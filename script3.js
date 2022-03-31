boss = "off"
//ANCHOR NUMERI CASUALI PER LE CELLE
//generiamo algoritmo numeri da 1 a n in ordine
//sparso che non si ripetono
function casual(n) {
    let ft = []
    let ct = 0;
    while (ct < n) {

        let casualN = Math.floor(Math.random() * n + 1);
        casualN = Number(casualN)
        if (ft.includes(casualN)) {

        } else {
            ct = ct + 1;
            ft.push(casualN)
        }

    }
    return ft

}


//generiamo algoritmo di p numeri
// da 1 a n in ordine sparso che non si ripetono
function scegli(n, p) {
    let fx = []
    let cx = 0;
    while (cx < p) {

        let casualN = Math.floor(Math.random() * n + 1);
        casualN = Number(casualN)
        if (fx.includes(casualN)) {

        } else {
            cx = cx + 1;
            fx.push(casualN)
        }

    }
    return fx
}



//ANCHOR ELEMENTI BASILARI PRE CLICK
let grid = document.getElementById("griglia");

let inizia = document.getElementById("bottone-difficolta");

let pannello = document.getElementById("difficolta-id");



inizia.addEventListener("click",      // ANCHOR inizio evento click
function(){
    document.getElementById("sconfitta").innerHTML = ``
    var partita = "on"
    
    // PULIZIA HTML GRID
    grid.innerHTML = ""

    // IMPOSTAZIONI CONTEGGIO
    let conteggio = 0;
    document.getElementById("conteggio").innerHTML = `<span>0</span>`

    //ANCHOR ESTRAIAMO DIFFICOLTA E GENERIAMO NUMERO DI CELLE
    let difficolta = pannello.value ;
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

    var bombeCell = []
    

    //ANCHOR CICLO GENERAZIONE CELLE
    for (let i = 0; i < numeroCelle; i++) {

        let box = document.createElement("div");
         let bomb = document.createElement("div")
        

      
        
        
        //Generazione elementi diversi (bomb e box)
        if (numeriBombe.includes(numerazioneCelle[i])) {
            grid.appendChild(bomb);
            bombeCell.push(bomb)
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
        }
        
        // console.log(bombeCell)
        
        // ANCHOR CLICK SU BOX
        box.addEventListener("click",
            function () {
                if(partita == "on"){
                this.classList.add("box-toccato")
                conteggio = conteggio + 1;
                document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`}
             if(conteggio == (Number(numerazioneCelle.length) - 16)){
                 
                partita = "off"
                document.getElementById("sconfitta").innerHTML = `HAI vinto! HAI FATTO ${conteggio} PUNTI!`
                    for (i = 0; i < 16; i++) {
                        let cellVittoria = document.createElement("div");
                        bombeCell[i].replaceWith(cellVittoria)
                        cellVittoria.classList.add("vittoria")
                        if (difficolta == "media") {
                            cellVittoria.classList.add("box9")
                            
                        } else if (difficolta == "facile") {
                            cellVittoria.classList.add("box10")
                            
                        } else {
                            cellVittoria.classList.add("box7")
                            
                        }
                        
                    }
                    
            }
            })
            if(partita == "on"){
            // ANCHOR CLICK SU BOMB
        bomb.addEventListener("click",
            function gerore() {
                
                partita = "off"
               document.getElementById("sconfitta").innerHTML =`HAI PERSO! HAI FATTO ${conteggio} PUNTI!`
                for(i = 0; i < 16; i++){
                bombeCell[i].classList.add("rosso");}
                
                    return bib = 1
                  
                
            })}

            
        
        
    } //ANCHOR FINE CICLO GENERAZIONE CELLE
    
    
}) //ANCHOR FINE funzione e CLICK 

console.log(partita)