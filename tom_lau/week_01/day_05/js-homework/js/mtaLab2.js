

let lines = {
  ["Line N"] : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  ["Line L"] : ["8th", "6th", "Union Square", "3rd", "1st"],
  ["Line 6"] : ["Grand Central", "33rd", "8th", "23rd", "Union Square", "Astor Place"]
};

let planTrip = function (startLine, startStation, endLine, endStation){

};
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
console.log(`You must travel throught ${startLine} at ${startStation} `);
//list 4 stations at ${startStation}: 34th, 28th, 23rd and Union Square
//using Array and indexOf.... I think?

// "Change at Union Square."
console.log(`Change at ${endStation}`);// if Union Square === True

// "Your journey continues through the following stops: 23rd, 28th, 33rd."
console.log(`Your journey continues through ${endLine} at ${endStation}`);
// using Array and (reverse) indexOf.... I think?
