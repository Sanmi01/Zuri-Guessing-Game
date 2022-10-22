let playerName, playerLevel, points, minRange, maxRange, secretNumber, lives, gameContinue;

playerName = prompt("Hello. What is your name?");

while (!playerName) {
  playerName = prompt("Please tell me your name?");
}
gameStart();

function gameStart() {
  playerLevel = 1;
  points = 0;
  minRange = 1;
  maxRange = 2
  lives = 3
  secretNumber = generateNewSecretNumber()

  welcome()
  outputResult()
  collectAnswer()

  function collectAnswer() {

    let response = prompt(`Guess my secret number, it is between the range of ${minRange} and ${maxRange}`)
    while (response !== secretNumber) {
      if (lives <= 0) {
        playerLoose()
        break
      }
      else if (Number.isNaN(parseInt(response))) {
        response = prompt('Please write a number')
      } else if (response > secretNumber) {
        --lives
        response = prompt('Too high, try lower')
      } else if (response < secretNumber) {
        --lives
        response = prompt('Too low, try higher')
      } else {
        console.log('Way to go!!, you got my number.')
        playergameContinue()
        break
      }
    }
  }

  function playergameContinue() {
    gameContinue = prompt("Enter Yes to keep playing or No to stop playing")
    if (gameContinue.toLowerCase() == "yes") {
      playerLevel++
      points++
      maxRange++
      secretNumber = generateNewSecretNumber()

      lives = 3

      outputResult()
      collectAnswer()
    } else if (gameContinue.toLowerCase() == "no") {
      console.log("Game Over")
      outputResult()
      console.log("Press Control+C to exit the game")
    } else {
      console.log("Invalid Input")
      playergameContinue()
    }

  }

  function playerLoose() {
    console.log("=============================================")
    console.log('You\'ve run out of lives.')
    console.log("Game Over")
    outputResult()
    console.log("Press Control+C to exit the game")
    return
  }
  function outputResult() {
    console.table({
      Player: playerName,
      Level: playerLevel,
      Points: points
    })
  }

  function generateNewSecretNumber() {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
  }

}

function welcome() {
  console.log(`Hey ${playerName}!, welcome to my guessing game!`)
  console.log('I will think of a number, and you\'re going to try and guess it.')
  response = prompt('Press Enter to continue')
  console.log('You have 4 lives for each level.')
  response = prompt('Press Enter to start')
}