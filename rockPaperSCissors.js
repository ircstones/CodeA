const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || 'paper' || 'scissors'){
    return userInput;
  } else {
    console.log('Error: Wrong inout or null input given.');
  }
}

const getComputerChoice = () => {
  let num = Math.floor(Math.random () * 3);
  switch (num) {
    case 0:
       return 'rock'
    case 1:
    	return 'paper'
    case 2:
    	return 'scissors'
    default:
      return 'Not a good number'
    						}
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice == computerChoice) {
    return 'The game is a tie!';

  if(userChoice === 'rock' && computerChoice === 'scissors') {
    return 'The user wins!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'The user wins!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'The user wins!';
  } else {
    return 'The computer wins!';
  }
}
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  console.log(`${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
