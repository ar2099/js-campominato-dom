let inizia = document.getElementById("bottone-difficolta");

let difficolta = document.getElementById("difficolta-id").value;

// console.log(difficolta)

let box = document.createElement("div");

let grid = document.getElementById("griglia");

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
console.log(casual(10))

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
console.log(scegli(10, 2))

inizia.addEventListener("click",      //inizio evento click


    function () {                                                               //inizio funzione click
        document.getElementById("griglia").classList.add("griglia")
        document.getElementById("griglia").classList.remove("none")
        document.getElementById("benvenuto").classList.add("none")


        let difficolta = document.getElementById("difficolta-id").value;
        let startConteggio = document.getElementById("conteggio").innerHTML = `<span>0</span>`
        grid.innerHTML = ""

        


        let conteggio = 0;

        if (difficolta == "facile") {

            for (let i = 0; i < 100; i++) {
                
                let box = document.createElement("div");
                let bomb = document.createElement("div")
                let grid = document.getElementById("griglia");
                let statoPartita = "on"
                let numeriCelle = casual(100)
                let numeriBombe = scegli(100, 16)
                if (numeriBombe.includes(numeriCelle[i])){
                    grid.appendChild(bomb);
                    bomb.classList.add("bomb10")
                    bomb.innerHTML = `<span>${numeriCelle[i]}</span>`
                    
                    
                } 
                else{
                grid.appendChild(box);
                box.classList.add("box10")
                box.innerHTML = `<span>${numeriCelle[i]}</span>`
                }

                box.addEventListener("click",
                    function () {

                        this.classList.add("box-toccato")
                        conteggio = conteggio + 1;
                        document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`
                    }
                )
                bomb.addEventListener("click",
                    function () {
                        
                        this.classList.add("rosso")
                        
                    })
                
            }
            
        }

        else if (difficolta == "media") {
            for (let y = 1; y < 82; y++) {
                let box = document.createElement("div");

                let grid = document.getElementById("griglia");

                grid.appendChild(box)
                box.classList.add("box9")
                box.innerHTML = `<span>${y}</span>`
                box.classList.remove("box10")
                box.classList.remove("box7")

                box.addEventListener("click",
                    function () {
                        this.classList.add("box-toccato")
                        conteggio = conteggio + 1;
                        document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`
                    }
                )
            }
        }

        else {
            for (let f = 1; f < 50; f++) {
                let box = document.createElement("div");

                let grid = document.getElementById("griglia");
                grid.appendChild(box)
                box.classList.add("box7")
                box.innerHTML = `<span>${f}</span>`
                box.classList.remove("box10")
                box.classList.remove("box9")

                box.addEventListener("click",
                    function () {
                        this.classList.add("box-toccato")
                        conteggio = conteggio + 1;
                        document.getElementById("conteggio").innerHTML = `<span>${conteggio}</span>`
                    }
                )
            }
        }


    }//fine funzione click
) //fine click