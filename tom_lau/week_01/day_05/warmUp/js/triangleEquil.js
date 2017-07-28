// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:
//
// isIsosceles - Returns whether the triangle is isosceles or not


let triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

  let isIsosceles = function (triangle) {
    // debugger
    if (triangle.sideA !== triangle.sideB && triangle.sideC
       === triangle.sidec && triangle.sideB === triangle.sideC){

      console.log (`This is a isosceles triangle.`);
    } else {
      console.log (`This is not a isosceles triangle.`);
    }
  };
  isIsosceles(triangle);
