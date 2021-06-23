var computerMove, playerMove;
playerMove = 'papier';
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';}
  else if (randomNumber == '2'){
  computerMove = 'papier';}
  else if (randomNumber == '3') {
    computerMove ='nożyce';
  }
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
