// Serge Says
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.


/////answer from teacher//////

const serge = function ( input ){
  // debugger
  if (input [  input.lenght -1] === "?") {
   console.log ('Sure.');
   return "Sure";

 } else if ( input === input.toUpperCase() && input !== "" ) {
   console.log(  "Whoa chill");
   return "Whoa, chill out"

 } else if ( !input ){
   console.log ( "Fine, be that way!");
   return  "Fine, be that way!";

 } else  {
   console.log( "Whatever" );
   return "Whatever";

 }

};

serge ( "hey?" );
serge (  "HEY" );
serge (  );
serge ( "Columbia" );




/////below is my work/////
let sergeResponse = ["sure", "Woah, chill out", "Fine. Be that Way!", "Whatever"] {
  if askQuestion ===1 sergeResponse.lenght[0];

  }else if yellHim = sergeResponse.lenght[1] {

  }else if withOutSaying = sergeResponse.lenght[2] {

  }else if anythingElse = sergeResponse.lenght[3] {
  }
}

console.log( askQuestion );
console.log(yellHim str.toUpperCase());
console.log(withOutSaying);
console.log(anythingElse);




////example//////
// const pluralize = function (noun, number) {
//   const part = number + ' ' + noun;
//   if (number === 1) {
//     return part;
//   } else {
//     return part + 's';
//   }
// }
//
// console.log( pluralize('dog', 1) );
// console.log( pluralize('cat', 2) );
// console.log( pluralize('sheep', 0) );
