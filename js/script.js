// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire,
//  un prompt alla volta,
//  i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri,
// il software dice quanti e quali numeri sono stati ricordati.

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

var randomNumberArray = [];

for (var i = 0; i < 5; i++) {
  var numero = randomNumber(1, 100);
  randomNumberArray.push(numero);
}
