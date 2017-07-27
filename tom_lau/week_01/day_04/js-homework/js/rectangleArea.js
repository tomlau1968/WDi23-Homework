// Geometry Function Lab
//
// Part 1, Rectangle
//

// area - Returns the area of the rectangle

let rectangle = {
   length: 4,
   width: 4
 };


let area = function (rectangle) {
  let totalArea = rectangle.length * rectangle.width // this line casn be emebeded
    console.log (`Area of ${ rectangle.length } x ${ rectangle.width } = ${ totalArea }`);
};
area(rectangle);
