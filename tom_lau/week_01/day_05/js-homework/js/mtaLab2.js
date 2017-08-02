const nLine =
["Times Square", "N 34th", "N 28th", "N 23rd", "Union Square", "N 8th"];
// lLine = ["L 8th", "L 6th", "Union Square", "L 3rd", "L 1st"];
// sixLine = ["Grand Central", "Six 33rd", "Six 8th", "Six 23rd", "Union Square", "Astor Place"]};

let singleLineTrip = function (/*startLine,*/startStation, endStation){
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
  // let trip = []; /*input of user input */
  // let startLine = mta[line]
  // let stationsTravelTo = //list of stations travel.... from startStation to endStation
  let numStationTravel = nLine.indexOf("Union Square") -  nLine.indexOf("Times Square");
  console.log(`Total ${numStationTravel} stops`);

  let journeyContinues = function (startStation, endStation){

    for (var i = 0; i < mta.length; i++) {
      array[i]
    }

  }






singleLineTrip("Union Square", "Times Square");




// singleTripReverse()






// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// console.log(`You must travel throught ${startLine} at ${startStation} `);
//list 4 stations at ${startStation}: 34th, 28th, 23rd and Union Square
//using Array and indexOf.... I think?

// "Change at Union Square."
// console.log(`Change at ${endStation}`);// if Union Square === True
//
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// console.log(`Your journey continues through ${endLine} at ${endStation}`);
// using Array and (reverse) indexOf.... I think?


//let planTrip = function (startLine, startStation, endLine, endStation){
