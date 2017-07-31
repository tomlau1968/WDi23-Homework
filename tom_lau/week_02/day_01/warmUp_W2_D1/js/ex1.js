// 99 bottles of beer
//
// "99 Bottles of Beer" is a traditional reverse counting song.
// It is popular to sing on long trips, as it is repetitive and easy to memorize but -- it can take a long time to sing.
//
// Lets try and make it run a little quicker using code:
//
// The song's lyrics are as follows:
//
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down, pass it around, 98 bottles of beer on the wall...
// The same verse is repeated, each time with one bottle fewer, until there are none left.
//
// Bear in mind, not all verses are the same:
//
// The verse for 1 bottle is as follows:
//
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.
// The verse for 0 bottles is as follows:
//
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Bonus:
// Count through any number of bottles.
// Be able to count between a range of numbers (ie, 20 to 10).

let bottlesOfBeer = [
 "bottles of beer on the wall, 99 bottles of beer.",
 "Take one down, pass it around, 98 bottles of beer on the wall...",
 "1 bottle of beer on the wall, 1 bottle of beer.",
 "No more bottles of beer on the wall, no more bottles of beer."
];

for (let i = 99; i > 0; i--) {
  if (i === 99) {
    console.log(`${i} ${bottlesOfBeer[0]}`);
  } else if (i < 99) {
    console.log(`${i} ${bottlesOfBeer[1]}`);
  } else if (i === 1) {
    console.log(`${i} ${bottlesOfBeer[2]}`);
  } else if ( i === 0){
    console.log(`${bottlesOfBeer[3]}`)
  }

};

/// take note from teacher///
//should start at zero, therefore no need to reverse number//
// break down as more lines//

// first function is the basic logic//
// write a second function for start to endLine
let beerSong = function(start, end){
  start = start || 99;
  end = end || 0;

  for( let i = start; i >= end; i--) {
    verse (i);
  }
};

for (var i = 0; i < array.length; i++) {
  array[i]
}

 //-----------or-------
//use "this", which === to "beer"
