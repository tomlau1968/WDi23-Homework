// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not



let triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
  };

  let isEquilateral = function (triangle) {
    // debugger
    if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sidec && triangle.sideB === triangle.sideC){

      console.log (`This triangle is equilateral.`);
    } else {
      console.log (`This triangle is not equilateral.`);
    }
  };
  isEquilateral(triangle);


  // a2+b2<c2
