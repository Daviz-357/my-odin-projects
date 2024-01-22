'use strict';

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const computerElection = document.querySelector('#computerElection');
const userElection = document.querySelector('#userElection');

const computerScore = document.querySelector('#computerScore');
const userScore = document.querySelector('#userScore');

const resultDisplay = document.querySelector('#result');


const choices = ['rock', 'paper', 'scissors'];

let userPoints = 0;
let computerPoints = 0;

let currentRound = 1;
let totalRounds = 5;

// Función para obtener la elección de la computadora
const getComputerChoice = () => {
    // Generar un índice aleatorio dentro del rango de longitud del array choices
    const randomChoice = Math.floor(Math.random() * choices.length);
    // Devolver el elemento correspondiente al índice generado aleatoriamente
    return choices[randomChoice];
}

const playRound = (userChoice, computerChoice) => {

            if(userChoice === computerChoice){
            return 'Tie!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userPoints++;
            return 'Win!';
        } else {
            computerPoints++;
            return 'Loose!';
        }


}

const playerChoice = (userChoice) => {

    if(currentRound <= totalRounds){

        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);

        resultDisplay.textContent = result.toUpperCase();

        computerElection.innerText = computerChoice.toUpperCase();
        computerScore.innerText = computerPoints;

        userElection.innerText = userChoice.toUpperCase();
        userScore.innerText = userPoints;

        currentRound++;

        if (currentRound > totalRounds) {
                // Mostrar el ganador después de 5 rondas
                if (userPoints > computerPoints) {
                    alert('You Win the Game!');
                } else if (computerPoints > userPoints) {
                    alert('Computer Wins the Game!');
                } else {
                    alert('It\'s a Tie!');
                }

                // Recargar la página después de cerrar la alerta
                location.reload();

        }
    }
};

rock.addEventListener('click', function(){
    playerChoice('rock');
});

paper.addEventListener('click', function(){
    playerChoice('paper');
});

scissors.addEventListener('click', function(){
    playerChoice('scissors');
});

const game = (numRounds) => {

    userPoints = 0;
    computerPoints = 0;
    for(let i = 0; i <= numRounds; i++){
        playerChoice(userChoice);
    }
}

game(5);