/*
You're starting your own credit card business.
You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

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
*/


const validateCreditCard = function ( cardNumber ) {
    if ( cardNumber.length !== 16 );
    console.log( "Card number is invalid." )
    return false;
  }


// to check if it's a number or nor: Syntax - Number.isInteger(value)
    for (let i = 0; i< cardNumber.length; i++ ) {
      if ( Number.isInteger( cardNumber ) === false ) {
      console.log( "Card number is invalid." )
      return false;
      }
    };


// The final digit must be even
    if( cardNumber[cardNumber.length - 1] % 2 !== 0) {
      return false;
    }


// The sum of all the digits must be greater than 16
    let sum = 0;
      for ( let i = 0; i < cardNumer.length; i++ ) {
        sum += Number(cardNumber[i]);
      } if ( sum <= 16 ) {
        return false;
      } if ( sum > 16 ) {
        return true;
      };


validateCreditCard( 9999999988880000 );
validateCreditCard( 6666666666661666 );
validateCreditCard( a92332119c011112 );
validateCreditCard( 4444444444444444 );
validateCreditCard( 1111111111111110 );
validateCreditCard( 6666666666666661 );
