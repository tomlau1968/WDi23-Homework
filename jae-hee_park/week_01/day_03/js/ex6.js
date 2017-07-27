// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without
//the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the
//current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate
//the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var lettersOfWord = ['F','O','X'];
var currentGuessedLetters = [];

const guessLetter = function(guessedLetter){
  for( let i = 0; i < lettersOfWord.length; i++){
    let x = lettersOfWord[i];
    if (x === guessedLetter){
      currentGuessedLetters.push(guessedLetter);
      console.log(`${x} congratulations you have found a new letter`);
      }
      if (currentGuessedLetters.length === lettersOfWord.length){
        console.log('congratulations you have won the game!');
      }
    }
  }
  guessLetter('F');

// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they
//found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var lettersOfWord = ['F','O','X'];
var currentGuessedLetters = [];

const guessLetter = function(guessedLetter){
  let rewardAmount = 0;
  for( let i = 0; i < lettersOfWord.length; i++){
    let x = lettersOfWord[i];
    if (x === guessedLetter){
      rewardAmount += 10;
      currentGuessedLetters.push(guessedLetter);
      console.log(`${x} congratulations you have found a new letter and your reward is ${rewardAmount}`);
    } else {
      rewardAmount -= 10;
    }
      if (currentGuessedLetters.length === lettersOfWord.length){
        console.log(rewardAmount);
      }
    }
  }
  guessLetter('F');

// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var lettersOfWord = ['F','O','X'];
var currentGuessedLetters = ['F','I','O'];

const guessLetter = function(guessedLetter){
  let stateOfHangman = 0;
  for (let i = 0; i < currentGuessedLetters.length; i++){
    if (guessedLetter === currentGuessedLetters[i]) {
      console.log("You have already guessed this letter");
    } else {
      currentGuessedLetters.push(guessedLetter);
      for( let j = 0; j < lettersOfWord.length; j++){
        let y = lettersOfWord[j];
          if (y === guessedLetter){
            stateOfHangman -= 1;
          } else {
            stateOfHangman += 1;
            if (stateOfHangman === 6) {
              console.log("pic of hangman");
            }
          }
        }
    }
  }
}
guessLetter('F');
