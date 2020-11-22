people = [
  { fname: "David", lname: "Rayy", age: 34 },
  { fname: "Suzanne", lname: "Collins", age: 38 },
  { fname: "Walter", lname: "Isaacson", age: 24 },
  { fname: "John", lname: "Doe", age: 51 },
  { fname: "Jane", lname: "Donnson", age: 20 },
];

// Calculate the sum of the ages - people array
let total = 0;

for (let i = 0; i < people.length; i++) {
  total += people[i].age;
}
console.log(total);

// Find the people that are older than 36

let olderThan = [];

for (let i = 0; i < people.length; i++) {
  if (people[i].age > 36) {
    olderThan.push(people[i]);
  }
}
console.log(olderThan);
console.log(olderThan[0]);
console.log(olderThan[1]);

/* const olderThan = people.filter((person) => person.age > 36);
return true boolean ? */

// Find the people that are smaller than 24

let youngerThan = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age < 24) {
    youngerThan.push(people[i]);
  }
}
console.log(youngerThan);
console.log(youngerThan[0]);

// Find the person with the longest name

let longestName = " ";

for (let i = 0; i < people.length; i++) {
  if (people[i].fname.length > longestName.length) {
    longestName = people[i].fname;
  }
}
console.log(`${longestName} is the person with the longest name`);

let longestName1 = [];

for (let i = 0; i < people.length; i++) {
  longestName1.push(people[i].fname);
}
let findLongest = longestName1.sort((a, b) => {
  return b.length - a.length;
});

console.log(`${findLongest[0]} is the person with the longest name`);

let numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

// Multiply every element by 3

let multiplyByThree = numbers.map((number) => {
  return number * 3;
});
console.log(multiplyByThree);

// Sort the numbers (ascending and descending)

// Ascending
let sortAscending = numbers.sort((a, b) => {
  return a - b;
});
console.log(sortAscending);

// Descending
let sortDescending = numbers.sort((a, b) => {
  return b - a;
});
console.log(sortAscending);
// Find the sum of the numbers

let accumulate = numbers.reduce((accumulate, currentValue) => {
  return accumulate + currentValue;
});
console.log(accumulate);
// Find max and min in the array

// Max
console.log(`Max of array numbers is ${Math.max(...numbers)}`);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// Min
console.log(`Min of array numbers is ${Math.min(...numbers)}`);

let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);

// Find second largest element in the array

let sortAscend = numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers[1]);

// Find the total numbers of even and odd elements in the array

let oddNum = 0;
let evenNum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNum += 1;
  } else {
    oddNum += 1;
  }
}

console.log(oddNum);
console.log(evenNum);

let oddNum1 = [];
let evenNum1 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNum1.push(numbers[i]);
  } else {
    oddNum1.push(numbers[i]);
  }
}

console.log(evenNum1.length);
console.log(oddNum1.length);

// Count number of digits in a number

let num = 79777;

console.log(num.toString().length);

// Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let line = "";
for (let i = 1; i < 6; i++) {
  console.log((line1 += i + " "));
}
// Write a program to find power of a number.
let num1 = 7;
let powerOf = 2;

console.log(Math.pow(num1, powerOf));

let myArray = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200];
// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 5 === 0) {
    console.log(myArray[i]);
    if (myArray[i] === 150) {
      break;
    }
  }
}
