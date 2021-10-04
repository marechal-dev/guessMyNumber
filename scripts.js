'use strict';

const checkButton = document.querySelector('.check')
const replayButton = document.querySelector('.again')
const guessMessage = document.querySelector('.message')
const scoreMessage = document.querySelector('.score')
const playerGuess = document.querySelector('.guess')
const highScoreMessage = document.querySelector('.highscore')
const centerNumber = document.querySelector('.number')

let score = 20
let highScore = 0
let secretNumber = Math.trunc(Math.random() * 20) + 1

// Function to reset the page styles and value when the reset button is pressed
function resetGame() {
  document.querySelector('body').style.backgroundColor = '#222'
  guessMessage.textContent = 'Start guessing...'
  centerNumber.textContent = '?'
  centerNumber.style.width = '15rem'
  scoreMessage.textContent = 20
  playerGuess.value = ''

  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
}

// Function to display a message at the querySelector .message
function displayMessage(message) {
  guessMessage.textContent = message
}

/**
 * Function that handles player input
 * and determinate if value is too high, too low or if there is no value
 */
function handlePlayerGuess() {
  const guess = Number(playerGuess.value)

  // When there is no input 
  if (!guess) {
    displayMessage('⛔ No number!')

  // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!')

    if (score > highScore) {
      highScore = score
      highScoreMessage.textContent = highScore
    }

    document.querySelector('body').style.backgroundColor = '#60b347'

    centerNumber.textContent = guess
    centerNumber.style.width = '30rem'

  // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')

      score--
      scoreMessage.textContent = score
    } else {
      displayMessage('💥 You lost the game!')
      scoreMessage.textContent = 0
    }
  }
}

replayButton.addEventListener('click', resetGame)
checkButton.addEventListener('click', handlePlayerGuess)
