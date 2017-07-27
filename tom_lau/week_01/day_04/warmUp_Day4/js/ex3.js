// Array and Functions Bonus Material

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

let vowel = function (aString) {
    if (aString[0] === "a") {
      console.log (`${ aString } is a vowel`);
  } else if (aString[0] === "e") {
      console.log (`${ aString } is a vowel`);
  } else if (aString[0] === "i") {
      console.log (`${ aString } is a vowel`);
  } else if (aString[0] === "o") {
      console.log (`${ aString } is a vowel`);
  } else if (aString[0] === "u") {
      console.log (`${ aString } is a vowel`);
  }
    else {
      console.log (`${ aString } is not a vowel`);
  }
}

vowel("orange");
vowel("hotdog");
vowel("duck");
vowel("ice cream");
