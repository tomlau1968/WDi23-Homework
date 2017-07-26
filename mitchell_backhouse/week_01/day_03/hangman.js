// setup the word to be used and guessed letter array
const word = "development".split('');
let guessedLetter = [];


// guess a letter inside word
const guessLetter = function () {

  // get input for letter. Does not sanitise input
  let letter = window.prompt("Enter a letter to guess");

  for (chr in word ) {
    if (letter === word[chr]) {
      if (!guessedLetter.includes(letter)) {
        guessedLetter.push(letter);
        console.log('Congratulations: Your letter was found:', letter);
      }
    }
  }
  showGuess();
}

// show letters guessed correctly (i.e. de_e____e__ ) and underscore all others
const showGuess = function (arg) {
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (guessedLetter.includes(word[i])) {
      arr.push(word[i]);
    } else arr.push('_');
  }

  // return only the array and don't log to console if argument is present
  if (arg) {
    return arr;
  } else {
    console.log(arr.join(' '));
  } 
}

// check if the game has been won
const winGame = function() {
  if (showGuess(1).join('') === word.join('')) {
    console.log("You have won the game!");
    return true;
  }
  return false;
}

// run the game
while (winGame() === false) {
  guessLetter()
}

// console.log(word);
