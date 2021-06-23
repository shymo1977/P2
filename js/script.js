

function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


var argMoveId;
function getMoveName(argMoveId) {
    if (argMoveId == 1) {
    return 'kamień';
    } 
    else if (argMoveId == 2) {
    return 'papier';
    } 
    else if (argMoveId ==3) {
    return 'nożyce';
    }    
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (playerMove == 'papier' && computerMove == 'kamień') {
    printMessage('Wygrywasz');
  } else if (playerMove == 'papier' && computerMove == 'nożyce') {
    printMessage('Przegrywasz');
  } else if (playerMove == 'kamień' && computerMove == 'papier') {
    printMessage('Przegrywasz');
  } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printMessage('Wygrywasz');
  } else if (playerMove == 'nożyce' && computerMove == 'papier') {
    printMessage('Wygrywasz');
  } else if (playerMove == 'nożyce' && computerMove == 'kamień') {
    printMessage('Przegrywasz');
  } else  {
    printMessage('Remisujesz');
  } 
}






buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


var computerMove, playerMove;
function buttonClicked(argButtonName) {
  var randomNumber;
  clearMessages();
  playerMove = argButtonName;
  console.log('Zagranie gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  console.log('wylosowana liczba to: ' + randomNumber + ', komputer zagrał ' +computerMove);
  console.log('komputer zagrał: ' + computerMove);
  printMessage('Twój ruch to: '+ playerMove + '. Komputer zagrał: '+ computerMove);
  console.log('Inicjacja funkcji DisplayResult');
  displayResult (playerMove, computerMove);
}
 