// Array and Functions Bonus Material

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.



let maxOfThreeNumbers = function (num1, num2, num3) {
  if (num1 > num2 && num3) {
    console.log(`${ num1 } is greater than ${ num2 } and ${ num3 }`);
  } else if (num1 > num3 && num2) {
    console.log(`${ num1 } is greater than ${ num2 } and ${ num3 }`);

  } else if (num2 > num1 && num3) {
    console.log(`${ num2 } is greater than ${ num1 } and ${ num3 }`);
  } else if (num2 > num3 && num1) {
    console.log(`${ num2 } is greater than ${ num1 } and ${ num3 }`);

  } else if (num3 > num1 && num2) {
    console.log(`${ num3 } is greater than ${ num1 } and ${ num2 }`);
  } else if (num3 > num2 && num1) {
    console.log(`${ num3 } is greater than ${ num1 } and ${ num2 }`);
  }
}

maxOfThreeNumbers (3, 5, 72);
