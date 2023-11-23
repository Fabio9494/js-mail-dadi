console.log("MI RACCOMANDO, GIOCA RESPONSABILMENTE")
let dado_utente = Math.floor(Math.random() * (7 - 1) + 1)
console.log("Il tuo punteggio: "+dado_utente);
let dado_computer = Math.floor(Math.random() * (7 - 1) + 1)
console.log("Punteggio computer: "+dado_computer);
if(dado_utente>dado_computer){
    console.log("HAI VINTO, QUESTA VOLTA TI E' ANDATA BENE")
}
else if(dado_utente==dado_computer) {
    console.log("MEGLIO DUE FERITI CHE UN MORTO cit.");
}
else{
 console.log("HAHAHAHAI PERSO");
}
