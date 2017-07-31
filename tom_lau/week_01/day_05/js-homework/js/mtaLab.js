

// MTA Lab
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and
//stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:

// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points.
//(For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
//so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
//

// The program takes the line and stop that a user is getting on at and the line
//and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

let lines = {
  "N" : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" : ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" : ["Grand Central", "33rd", "8th", "23rd", "Union Square", "Astor Place"]
};

// let planForTrip = lines.N[0].indexOf(lines.N[1]++);


console.log(`You are in ${lines[0]}, ${lines.N[1]}, next station ${lines.N[2]}`);


// Need to write function statement using ('for...let') to +1 on each "Line N" till "Union Square" with indexOf and output console1.
//
// write console2 to "Change at Union Square on Line 6"
//
// At "Union Square" write another function statement using ('for...let') to reverse back to "Line 6", station "33rd" output console3.
//
// Write console 4 "Your desolation have arraived at Line 6, 33rd station"
//
//
// var power = [
//     "Superman",
//     "Wonder Woman",
//     "Batman"
// ];
//
// var index = power.indexOf("Wonder Woman");
//
// var rank = index + 1;
//
// // Outputs: "Wonder Woman's rank is 2"
// console.log("Wonder Woman's rank is " + rank);



// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// //              (line, start,  end )
//   singleLineTrip('N', '34th', '8th');



//           (startLine, startStation,    endLine,  endStation)
//   planTrip('N',       'Times Square',  '6',      '33rd');
//
