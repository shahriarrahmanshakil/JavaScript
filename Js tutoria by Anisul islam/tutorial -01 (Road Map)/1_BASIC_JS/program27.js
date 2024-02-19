/* Guessing Game */
var numberOfWins = 0
var numberOfLost = 0

// run the program for 5 times 
for (var i = 1; i <= 5; i++) {

    // Guess a number from 1 to 5
    var guessNumber = parseInt(prompt("Guess a number from 1 to 5 : "))

    // Generate a random number between 1 to 5
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    //check condition

    if (guessNumber == randomNumber) {
        numberOfWins++;
        console.log("You have won ")
    }
    else {
        numberOfLost++;
        console.log("You have lost. Random number was : " + randomNumber)
    }
}
console.log("Total win = " + numberOfWins)
console.log("Total lost = " + numberOfLost)