// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


let maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${ num1 } is greater than ${ num2 }`);
  } else {
    console.log(`${ num2 } is greater than ${ num1 }`);
  }
}

maxOfTwoNumbers(54, 23);
