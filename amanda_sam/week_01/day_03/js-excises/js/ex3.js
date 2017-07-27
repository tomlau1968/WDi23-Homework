/*
Write a for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is even or odd,
and report that to the screen (e.g. "2 is even").
*/

// ONE WAY OF WRITING THE CODING
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log( i + " is even");
//   }
//   else {
//     console.log( i + " is odd");
//   }
// }


for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log( `${ i } is even` ); //Interpolation
  }
  else {
    console.log( `${ i } is odd` );
  }
}

// EXAMPLE
// for (var current = 100; current < 200; current++) {
//   console.log('Testing ' + current);
//   if (current % 7 == 0) {
//     console.log('Found it! ' + current);
//     break;
//   }
// }
