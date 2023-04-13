// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.




function creazioneElementoHtml(tagHtml, classi, number) {
    let elemento = document.createElement(tagHtml);
    elemento.className = classi;
    elemento.innerText = number;

    return elemento;

}

console.log(creazioneElementoHtml("div", "box", 1))



let griglia = document.querySelector(".griglia");
let randomBombe = []

let punteggioFinale = [
        
]

creazioneBombe()

//contenitore numro bombe random

function creazioneBombe() {
    randomBombe = [];

    for (let b = 1; b <= 16; b++) {

        let doppio = Math.floor(Math.random() * 100)

        if (randomBombe.indexOf(doppio) === -1) {
            randomBombe.push(doppio)
        } else {
            b--

        }
    }

    console.log(randomBombe)
}

//creiamo un ciclo che ci permetterà di creare 100 quadrati per la nostra grliglia
for (let i = 1; i <= 100; i++) {

    // creiamo una variabile della funziona per riutilizzarla in modo più pratico
    let cella = creazioneElementoHtml("div", "box", i)
    // cicliamo gli stili della cella all'interno della griglia
    griglia.append(cella)


    cella.addEventListener("click", function () {

        //permettiamo il cambio di classe tramite click
        this.classList.toggle("bg-2");

        //far apparire in console il numero selezionato
        console.log(i);

        if ( randomBombe.indexOf(i) !== -1) {
            this.style.backgroundColor = 'red';
            console.log(this);
            // alert('hai perso')
            document.querySelector('.louser').style.display = 'block';
            document.querySelector('.punteggio').innerHTML +=  `<div>${punteggioFinale.length}</div>`  
        }

        if (punteggioFinale.indexOf(i) === -1 && randomBombe.indexOf(i) === -1) {
            punteggioFinale.push(i);
        }
        console.log(punteggioFinale.length);


        

    })



}





