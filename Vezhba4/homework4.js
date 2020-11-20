// // 1. Create person object with properties firstName and lastName and add coresponding values.

// // let person = {
// //   firstName: "Ljubomir",
// //   lastName: "Jakimovski",
// // };

// // 2. Print the values of the properties of the object. Use both approaches.
// console.log(person);

// let first_name = person.firstName;
// console.log(first_name);

// let last_name = person["lastName"];
// console.log(last_name);

// // 3. Print the whole firstName and lastName of the person.

// console.log(person.firstName + " " + person.lastName);

// // 4. Add the property age and coresponding value to the person object. Use both approaches.

// person["age"] = 26;
// console.log(person["age"]);

// person.age = 26;
// console.log(person.age);

// console.log(person);

// // 5. Print how old the person is.

// console.log(person.firstName + " is " + person.age + " years old ");

// // 6. Find the type of the variable person.

// console.log(typeof person);

// // 7. Create another person object. Populate the object with coresponding values.

// let personTwo = {
//   firstName: "Aleksandra",
//   lastName: "Jakimovska",
//   age: 23,
// };

// console.log(personTwo);

// // 8. Find out which person is older.

// // if (person.age > personTwo.age) {
// //   console.log(person.firstName + " is older than " + personTwo.firstName);
// // } else if (person.age < personTwo.age) {
// //   console.log(personTwo.firstName + " is older than " + person.firstName);
// // } else {
// //   console.log("They are the same age");
// // }

// // checks if the case is true

// switch (true) {
//   case person.age > personTwo.age: {
//     console.log(person.firstName + " is older than " + personTwo.firstName);
//     break;
//   }
//   case person.age < personTwo.age: {
//     console.log(personTwo.firstName + " is older than " + person.firstName);
//     break;
//   }
//   default:
//     console.log("They are the same age");
// }

// // 9. Find out how many years the person1 is older/younger from person2.

// // checks if the case is true

// switch (true) {
//   case person.age > personTwo.age: {
//     console.log(
//       person.firstName +
//         " is " +
//         (person.age - personTwo.age) +
//         " year/s older than " +
//         personTwo.firstName
//     );
//     break;
//   }
//   case person.age < personTwo.age: {
//     console.log(
//       person.firstName +
//         " is " +
//         (personTwo.age - person.age) +
//         " year/s younger than " +
//         personTwo.firstName
//     );
//     break;
//   }
//   default:
//     console.log("They are the same age");
// }

// // if (person.age > personTwo.age) {
// //   console.log(
// //     person.firstName +
// //       " is " +
// //       (person.age - personTwo.age) +
// //       " years older than " +
// //       personTwo.firstName
// //   );
// // } else if (person.age < personTwo.age) {
// //   console.log(
// //     "Ljubomir is " +
// //       (personTwo.age - person.age) +
// //       " year/s younger than " +
// //       personTwo.firstName
// //   );
// // } else {
// //   console.log("They are the same age");
// // }

// // 10. Create another peson object. Populate the object with coresponding values.

// let personThree = {
//   firstName: "Petar",
//   lastName: "Jakimovski",
//   age: 3,
// };
// // 11. Find the sum of the years of the people.

// let sumAge = person.age + personTwo.age + personThree.age;
// console.log(sumAge);

// // 12. Find the average of the years of the people.

// let averageYears = (person.age + personTwo.age + personThree.age) / 3;
// console.log(averageYears);

// // 13. Find out who is the youngest of all three people.

// let person_1 = person.age;
// let person_2 = personTwo.age;
// let person_3 = personThree.age;

// // if (person_1 < person_2 && person_1 < person_3) {
// //   console.log(person.firstName + " is the youngest ");
// // } else if (person_2 < person_1 && person_2 < person_3) {
// //   console.log(personTwo.firstName + " is the youngest ");
// // } else if (person_3 < person_1 && person_3 < person_2) {
// //   console.log(personThree.firstName + " is the youngest ");
// // } else {
// //   console.log("They are the same age");
// // }

// // checks if case is true

// /* Problems with testing
// Person 1 = 10 years
// Person 2 = 10 years
// Person 3 = 11 years
// it prints out "They are the same age"

// let brain = fried

// console.log("ask in class")
// */

// /* switch (true) {
//   case person_1 < person_2 && person_1 < person_3: {
//     console.log(person.firstName + " is the youngest ");
//     break;
//   }
//   case person_2 < person_1 && person_2 < person_3: {
//     console.log(personTwo.firstName + " is the youngest ");
//     break;
//   }
//   case person_3 < person_1 && person_3 < person_2: {
//     console.log(personThree.firstName + " is the youngest ");
//     break;
//   }
//   default:
//     console.log("They are the same age");
// } */

// switch (true) {
//   // checks if they are the same age
//   case person_1 === person_2 &&
//     person_1 === person_3 &&
//     person_2 === person_3: {
//     console.log("They are the same age");
//     break;
//   }
//   // checks if person 1 is the youngest
//   case person_1 < person_2 && person_1 < person_3: {
//     console.log(person.firstName + " is the youngest");
//     break;
//   }
//   // checks if person 2 is the youngest
//   case person_2 < person_1 && person_2 < person_3: {
//     console.log(personTwo.firstName + " is the youngest ");
//     break;
//   }
//   // checks if person 3 is the youngest
//   case person_3 < person_1 && person_3 < person_2: {
//     console.log(personThree.firstName + " is the youngest");
//     break;
//   }
//   //checks if person 1 and person 2 are the same age, and are older than person 3
//   case person_1 === person_2 && person_1 > person_3 && person_2 > person_3: {
//     console.log(personThree.firstName + " is the youngest");
//     break;
//   }
//   //checks if person 1 and person 2 are the same age, and are younger than person 3
//   case person_1 === person_2 && person_1 < person_3 && person_2 < person_3: {
//     console.log(
//       person.firstName +
//         " and " +
//         personTwo.firstName +
//         " are younger than " +
//         personThree.firstName
//     );
//     break;
//   }
//   //checks if person 2 and person 3 are the same age, and are older than person 1
//   case person_2 === person_3 && person_2 > person_1 && person_3 > person_1: {
//     console.log(person.firstName + " is the youngest");
//     break;
//   }
//   //checks if person 2 and person 3 are the same age, and are younger than person 1
//   case person_2 === person_3 && person_2 < person_1 && person_3 < person_1: {
//     console.log(
//       personTwo.firstName +
//         " and " +
//         personThree.firstName +
//         " are younger than " +
//         person.firstName
//     );
//     break;
//   }
//   //checks if person 1 and person 3 are the same age, and are older than person 2
//   case person_1 === person_3 && person_1 > person_2 && person_3 > person_2: {
//     console.log(personTwo.firstName + " is the youngest ");
//     break;
//   }
//   //checks if person 1 and person 3 are the same age, and are younger than person 2
//   case person_1 === person_3 && person_1 < person_2 && person_3 < person_2: {
//     console.log(
//       person.firstName +
//         " and " +
//         personThree.firstName +
//         " are younger than " +
//         personTwo.firstName
//     );
//     break;
//   }
// }

let person = {
  firstName: "kur",
  lastName: "Jakimovska",
  age: 23,
};

let anotherperson = {
  firstName: "picka",
  lastName: "Jakimovska",
  age: 23,
};

let thirdperson = {
  firstName: "gz",
  lastName: "Jakimovska",
  age: 23,
};

let young = Math.min(person.age, anotherperson.age, thirdperson.age);

switch (young) {
  case person.age:
    console.log(person.firstName + " is the youngest person");
    break;
  case anotherperson.age:
    console.log(anotherperson.firstName + " is the youngest person");
    break;
  case thirdperson.age:
    console.log(thirdperson.firstName + " is the youngest person");
    break;
}
