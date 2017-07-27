// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//


let rectangle = {
   length: 4,
   width: 4
 };

let isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    console.log (`${ rectangle.length } by ${ rectangle.width } is a square.`);
  }
};
isSquare(rectangle);
