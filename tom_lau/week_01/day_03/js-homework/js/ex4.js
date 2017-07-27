// Array and Functions Bonus Material

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

let sumArray = function (num1, num2, num3, num4) {
  plusTotal = num1 + num2 + num3 + num4;
  console.log(`The sum of ${ num1 } + ${ num2 } + ${ num3 } + ${ num4 } =  ${ plusTotal }` )
}

let multiplyArray = function (num1, num2, num3, num4) {
  plusTotal = num1 * num2 * num3 * num4;
  console.log(`The sum of ${ num1 } x ${ num2 } x ${ num3 } x ${ num4 } =  ${ plusTotal }` )
}

sumArray(1, 2, 3, 4);
multiplyArray(1, 2, 3, 4);
