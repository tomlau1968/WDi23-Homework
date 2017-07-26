// setup
const word = "development".split('');
let guessedLetter = [];

// guess a letter inside word
const guessLetter = function (letter) {
  for (l in word ) {
    if (letter === word[l]) {
      if (!guessedLetter.includes(letter)) {
        guessedLetter.push(letter);
        console.log('Congratulations: Your letter was found:', letter);
      }
    }
  }
  showGuess();
  winGame();
}

// show letters guessed correctly (i.e. de_e____e__ ) and underscore all others
const showGuess = function (param) {
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (guessedLetter.includes(word[i])) {
      arr.push(word[i]);
    } else arr.push('_');
  }
  if (param) {
    return arr;
  } else {
    console.log(arr.join(' '));
  } 
}

const winGame = function() {
  if (showGuess(1).join('') === word.join('')) {
    console.log("You have won the game!");
  }
}

console.log(word);

guessLetter('e');
guessLetter('d');
guessLetter('x');
guessLetter('v');
guessLetter('l');
guessLetter('p');
guessLetter('m');
guessLetter('n');
guessLetter('t');
guessLetter('o');
