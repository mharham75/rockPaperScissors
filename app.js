const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let gameIsRunning = false ;

const getPlayerChoice = function(){
const selection = prompt(`${ROCK} , ${PAPER} , or ${SCISSORS}?`,'');
if(selection!=ROCK && selection!= PAPER && selection!=SCISSORS){
    alert('Invalid Choice ! Choose ROCK for you')
    return ROCK ;}
return selection;
}

const getComputerChoice = function(){
    const getRandomValue = Math.random();
    if(getRandomValue < 0.34)
        return ROCK;
    else if(getRandomValue < 0.67)
        return PAPER;
    else
        return SCISSORS;
};

const getWinner = function(pChoice,cChoice){
    if(cChoice === pChoice)
        return 'RESULT_DRAW';
    
    else if(cChoice === ROCK && pChoice === PAPER ||
            cChoice === PAPER && pChoice === SCISSORS ||
            cChoice === SCISSORS && pChoice === ROCK)
            return 'RESULT_PLAYER_WINS';

    else
        return 'RESULT_COMPUTER_WINS';
};

startGameBtn.addEventListener('click',function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting ...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winnner = getWinner(playerSelection,computerSelection);
    alert(winnner);
});
