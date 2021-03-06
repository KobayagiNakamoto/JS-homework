let fruits = ["Apple", "Banana", "Orange"];
let students = [
  {
    firstName: "John",
    lastName: "Doe",
    index: 20201,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    index: 20202,
  },
  {
    firstName: "David",
    lastName: "Vinoth",
    index: 20203,
  },
  {
    firstName: "Divya",
    lastName: "Ishitha",
    index: 20204,
  },
  {
    firstName: "Thomas",
    lastName: "Edgardson",
    index: 20205,
  },
];

// 1. Loop through the arrays and print the elements.
for (let i = 0; i < fruits.length; i++) {
  console.log("item", fruits[i]);
}

console.log(`
`);

// 2. Loop through the students array and print:
//     a. the properties of the objects.

for (let i = 0; i < students.length; i++) {
  for (let prop in students[i]) {
    console.log(prop + " -> " + students[i][prop]);
  }
}

console.log(`
`);

// for (let i = 0; i < students.length; i++) {
//   let element = students[i];
//   for (let prop in element) {
//     console.log(prop);
//   }
// }

//     b. the values of the properties in the objects.

for (let i = 0; i < students.length; i++) {
  let element = students[i];
  for (let prop in element) {
    console.log(element[prop]);
  }
}

console.log(`
`);

// 3. Create a loop and print the first 10 numbers.
for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log(`
`);

// 4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
for (let i = 0; i < 11; i += 2) {
  console.log(i);
}

console.log(`
`);

//     a. starting from 0 && using a conditional statement (increase the counter for 1)
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log(`
`);

// 5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

console.log(`
`);

//     a. starting from 0 && using a conditional statement (increase the counter for 1)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log(`
`);

// 6. Find a way to check the type of the array (except for the typeof command).

console.log(`
`);


let checkArr = Array.isArray(students);
console.log(checkArr);

