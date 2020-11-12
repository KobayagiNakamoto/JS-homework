// 1. Declare variables and use the assignment operators ( print the results)

let x = 1;

x += 1;

console.log(x); // prints out 2, x value is 2

x -= -3;

console.log(x); // prints out 5, x value is 5

x *= 2;

console.log(x); // prints out 10, x value is 10

x /= 2;

console.log(x); // prints out 5, x value is 5

x %= 2;

console.log(x); // prints out 1, x value is 1

// 2. Try out the two kind of alerts that have been studied.

let sawClassic = "Hello";
alert(sawClassic);

confirm("Do you want to play a game?");
// 3. Try out the different types of loggings in the console + * Bonus: Try and find out new types of loggings in the console

console.log("You lose!"); // outputs text

console.error("Game is lost "); // output an error message

console.warn("Tommorow is a new day and the sun comes out once again"); // outputs text with a yellow background.

console.table(["New game", "Restart level", "End session"]); // displays data in a table

let myObject = { name: "Character", place: "open world", mission: "win" };
console.dir(myObject);
console.dir(location); // displays interactive list of the properties of the specified object
console.log(location);

console.error("You've been dissconected from the server"); // output an error message

// use of the console.group and console.groupEnd for grouping messages

console.time("server ping");
setTimeout(() => {
  console.group("TRYING TO REACH SERVER...");
  console.log("Reconnecting...");
  console.groupEnd(); // Close the "TRYING TO REACH SERVER" group
  console.timeEnd("server ping");
}, 5000);

console.time("try again");
setTimeout(() => {
  console.group("TRYING TO REACH SERVER... (2)");
  console.log("Please wait...");
  console.groupEnd(); // Close the "TRYING TO REACH SERVER (2)" group
  console.timeEnd("try again");
}, 7000);

console.time("Issue resolved");
setTimeout(() => {
  console.group("RESOLVING...");
  console.log("Connected ✓");
  console.groupEnd(); // Close the "RESOLVING..." group
  console.timeEnd("Issue resolved");
}, 9000);

// console.clear(); clears the console
