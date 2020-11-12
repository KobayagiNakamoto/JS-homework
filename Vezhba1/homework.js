// Declare variables for primitive types (BigInt? Symbol?)

let periodName = "Corona times"; 

let weight = 80; 

let timesAreHard = true; 

let identityCrisis; 

let blackHole = null; 


// Print value and type of variables

console.log("periodName is of type " + typeof periodName); // string

console.log("weight is of type " + typeof weight); // number

console.log("timesAreHard is of type " + typeof timesAreHard); // boolean

console.log("identityCrisis is of type " + typeof identityCrisis); // undefined *

console.log("blackHole is of type " + typeof blackHole); // object
/* type of null is not "null" but is rather "object", 
which is too broad and there are other more advanced ways we could check true type i.e toType(null) = null
*/

// Change value of some of the variables

weight = 78;
console.log(weight);

timesAreHard = false;
console.log(timesAreHard);

// Create a constant and try to assign it a new value. What happens?

/* 
const legs = 2;
legs = 3;
The browser points to an Uncaught Type Error: Assignment to constant variable.
This means we cannot alter the value of the previously declared constant */

// Declare variables and use arithmetical operators (print out result)
let num1 = 7;
let num2 = 4;

console.log(num1 + num2); // 11

console.log(num1 - num2); // 3

console.log(num1 / num2); // 1.75

console.log(num1 * num2); // 28

console.log(num1 % num2); // 3

num1++;
console.log(num1); // 8

num2--;
console.log(num2); // 3

// Declare variables and use comparison operators (print out result)
let num3 = 5;
let num4 = "5";
let num5 = 8;
let num6 = 10;

console.log(num3 == num4); // true

console.log(num3 === num4); // false

console.log(num3 != num4); // false

console.log(num3 !== num4); // true

console.log(num5 > num3); // true

console.log(num6 >= num5); // true

console.log(num5 < num6); // true

console.log(num5 <= num6); // true

// Declare variables and use logical operators (print out result)

console.log(num5 > 2 && num6 < 11); // true
console.log(num6 > 9 || num6 < 9); // true
console.log(!(num6 > 9 || num6 < 9)); // false
