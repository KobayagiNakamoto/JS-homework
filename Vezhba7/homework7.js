// 1. Write a function to find first and last digit of a number.

// function firstAndLast(first, last) {}

// 2.  Write a function to reverse the following array (manually and  using .reverse array method )
// input array = [10, 20, 30, 40, 50]
// output array = [50, 40, 30, 20 ,10]
let myArray = [10, 20, 30, 40, 50];

let reverseArray1 = myArray.reverse((array) => {
  return array;
});

console.log(myArray);

myArray = [10, 20, 30, 40, 50];

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

let r = reverseArray(myArray);
console.log(r);

// 3. Write a functions to calculate the perimeter and the area of a square

// calculate square perimeter

//with traditional function
function calculateSqrPerimeter1(a) {
  return a * 4;
}
let per = calculateSqrPerimeter1(2);
console.log(per);

// with arrow function
let calculateSqrPermieter2 = (a) => {
  return a * 4;
};

p = calculateSqrPermieter2(2, 2, 2, 2);
console.log(p);

// calculate square area

// with traditional function
function calculateSqrArea1(a) {
  return a * a;
}

let area = calculateSqrArea1(2);
console.log(area);

// with arrow function
let calculateSqrArea2 = (a) => {
  return a * a;
};

area1 = calculateSqrArea2(2);
console.log(area);

// 4. Write a functions to calculate the perimeter and the area of a rectangle

// with traditional function
function calculateRecPerimeter1(length, width) {
  return length * 2 + width * 2;
}
let recResult1 = calculateRecPerimeter1(7, 5);
console.log(recResult1);

function calculateRecArea1(length, width) {
  return length * width;
}

let recResult2 = calculateRecArea1(7, 5);
console.log(recResult2);

// with arrow function
let calculateRecPerimeter2 = (length, width) => {
  return length * 2 + width * 2;
};

result_perimeter = calculateRecPerimeter2(7, 5);
console.log(result_perimeter);

let calculateRecArea2 = (length, width) => {
  return length * width;
};

result_area = calculateRecArea2(7, 5);
console.log(result_area);

// 5. Write a functions to calculate the perimeter and the area of a circle

// with traditional function
function calculateCirclePerimeter1(radius) {
  return 2 * Math.PI * radius;
}
let circleResult1 = calculateCirclePerimeter1(5);
console.log(circleResult1);

function calculateCircleArea1(radius) {
  return Math.PI * radius * radius;
}

let circleResult2 = calculateCircleArea1(5);
console.log(circleResult2);

// with arrow function

let calculateCirclePerimeter2 = (radius) => {
  return 2 * Math.PI * radius;
};

result_perimeter_circle = calculateCirclePerimeter2(5);
console.log(result_perimeter_circle);

let calculateCircleArea2 = (radius) => {
  return Math.PI * radius * radius;
};

result_area_circle = calculateCircleArea2(5);
console.log(result_area_circle);

// 6. Write a function to return the last n elements from a given array (manually and  using .reverse array method)
// ** n and the array should be parameters in the function

//

// let reverseArray2 = myArray.reverse((array, n) => {
  
//   return array..;
// });



// function givenArray(array, n) {
//   for (let i = arr.length - 1; i >= 0; i--)

// }
