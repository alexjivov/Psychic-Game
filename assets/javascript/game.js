//Set up the comp variables available//
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Zero out the settings + default settings//

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;

var updateLettertoGuess = null; 

//Letters the player guesses go into the array as they are inputted //
var guessedLetters = [];

//Computer selects a random element (math.floor(math.Random() from the available var choices (computerChoices.length)//

var computerGuess = computerChoices[math.floor(math.Random() * computerChoices.length)];

// Guess limit for the player set as a function // 

var guessesUpdate = function() {

//Connect with the HTML element using document selector (i.e document query selector)//

    document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft.join();

};

var updateGuessLetters = function () {
    this.guessLetter = this.computerChoices[math.floor(math.Random() * this.computerChoices.length)];

};

// Setting up the letters guessed so far and showing it as letters//
var updateGuessedSoFar = function () {
    document.querySelector('#guessesSoFar').innerHTML = "Guesses So Far: " + guessedLetters.join ();

};

//Now reset everything so the function calls again after and can be replayed - variables already declared so DONT USE VAR AGAIN//
var reset = function () {
    totalGuesses = 9; 
    guessesLeft = 9;
    // Array empty for user input still//
    guessedLetters = [];

    guessesUpdate();
    updateGuessLetters();
    updateGuessedSoFar();

}

guessUpdate();
updateLettertoGuess();

//Setting up user keys to guess a letter//
document.onkeyup = function(event) {
    guessesUpdate--;
var playerGuess = string.fromCharCode(event.keyCode).toLowerCase();

//This pushes the guessed letter into the array//
guessedLetters.push(playerGuess);
updateGuessedSoFar();
updateGuessLetters();

//if/else statements for win/lose conditions//
        if (guessesLeft > 0) {
            if (playerGuess === computerGuess);
            wins++;
            document.querySelector('#wins').innerHTML = "Wins " + wins;
            alert("You Win!")
            reset();
            }
        else if (guessesLeft == 0) {
            losses++
            document.querySelector('#losses').innerHTML = "Lossses " + losses;
            alert("You Lose!")
            reset();
        }

};
