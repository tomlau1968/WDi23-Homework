Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

//delete after//
let cashRegister = {
  banana: 1.25,
  handkerchief: 0.99,
  tShirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cartForParty = function(cashRegister) {
  let totalCash= (cashRegister.banana + cashRegister.handkerchief + cashRegister.tShirt + cashRegister.apple + cashRegister.nalgene + cashRegister.proteinShake);
  console.log(`The total price = $ ${totalCash}`);
};
cartForParty(cashRegister);
//delete after//


/* validateCreditCard return true || false

//////Rules/////////
validateCreditCard.length === 16
validateCreditCard = 2 different digitals
validateCreditCard.length[15] === even
validateCreditCard > 16
*/

let validateCreditCard = {
    totalCardNum : 16,
    represented : 2 //not sure??//
    evenCardlNum : "even"
    sumDigital : >16
};

const totalCardNum = function (validateCreditCard) {
      if cardNum = validateCreditCard.length ++1 === 16
      return true;
  	} else {
  		  return false;
  	}
  }

const evenCardlNum = function (evenNum) {
      if evenNum =


//       function isEven(n) {
//   n = Number(n);
//   return n === 0 || !!(n && !(n%2));
// }





}
