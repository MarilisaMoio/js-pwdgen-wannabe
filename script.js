// Obiettivo: ottenere una psw composta dal nome dell'utente, il cognome, il suo colore preferito e il numero 23

//raccolta dati
const userName = prompt("Inserisci qui il tuo nome senza maiuscole");

const userSrname = prompt("Inserisci qui il tuo cognome senza maiuscole");

const userColor = prompt("Inserisci qui il tuo colore preferito senza maiuscole");

//bonus
const userNumberStr = prompt("Inserisci qui un numero");

const userNumber = parseInt(userNumberStr);

const finalNumber = userNumber + 23;

//output
document.getElementById("pswContainer").innerHTML = userName + userSrname + userColor + finalNumber;

document.getElementById("yay").innerHTML = "&star; yay! &star;";