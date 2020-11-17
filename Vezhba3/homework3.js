// 1. Write a JavaScript conditional statement to sort three numbers. Print the result.
let a = 1;
let b = 1;
let c = 2;

if (a > b && a > c) {
  // nested if checks if b is bigger than c then order goes (a,b,c)
  if (b > c) {
    console.log(a + "," + b + "," + c);
  } else {
    // otherwise we print out (a, c, b)
    console.log(a + "," + c + "," + b);
  }
} else if (b > a && b > c) {
  // nested if checks if a is bigger than c then order goes (b, a, c)
  if (a > c) {
    console.log(b + "," + a + "," + c);
  } else {
    // otherwise we print out (b, c, a)
    console.log(b + "," + c + "," + a);
  }
} else if (c > a && c > b) {
  // nested if checks if a is bigger than b then order goes (c, a, b)
  if (a > b) {
    console.log(c + "," + a + "," + b);
  } else {
    // otherwise we print out (c, b, a)
    console.log(c + "," + b + "," + a);
  }
  /* additional conditional statements that check if two of the numbers are equal,
  to still preserve the ascending order, and finally to check if all the numbers are equal,
  to print out that there is no order to be kept.
  */
} else if (a == b && a > c) {
  console.log(a + "," + b + "," + c);
} else if (b == c && b > a) {
  console.log(b + "," + c + "," + a);
} else {
  console.log("where is the order if everybody is equal?");
}

// 2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

let d = -4;
let e = 2;
let f = -6;
let g = 45;
let h = 7;

if (d >= e && d >= f && d >= g && d >= h) {
  console.log(d);
} else if (e >= d && e >= f && e >= g && e >= h) {
  console.log(e);
} else if (f >= d && f >= e && f >= g && f >= h) {
  console.log(f);
} else if (g >= d && g >= e && g >= f && g >= h) {
  console.log(g);
} else {
  console.log(h);
}

// 3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade.
// Student_Name	Marks
// David	        80
// Vinoth	        77
// Divya	        88
// Ishitha	        95
// Thomas	        68

// Range	Grade
// <60	    F
// <70	    D
// <80	    C
// <90	    B
// <100	    A

let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;

let averageMark = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

if (averageMark < 60) {
  console.log(averageMark + " You've been graded with an F");
} else if (averageMark < 70) {
  console.log(averageMark + " You've been graded with a D");
} else if (averageMark < 80) {
  console.log(averageMark + " You've been graded with a C");
} else if (averageMark < 90) {
  console.log(averageMark + " You've been graded with a B");
} else {
  console.log(averageMark + "You've been graded with an A");
}

// 4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

let hour = 24;

if (hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else if (hour >= 17 && hour <= 24) {
  console.log("Good evening");
}

// 5. For a given day, print out whether it is a day of the work week or weekend.

let givenDay = "Saturday";

if (
  givenDay === "Monday" ||
  givenDay === "Tuesday" ||
  givenDay === "Wednesday" ||
  givenDay === "Thursday" ||
  givenDay === "Friday"
) {
  console.log("It is the workweek");
} else if (givenDay === "Saturday" || givenDay === "Sunday") {
  console.log("It is the weekend");
} else {
  //if user types something other than days
  console.log("invalid input");
}

switch (givenMonth) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday": {
    console.log("It is the workweek");
    break;
  }
  case "Saturday":
  case "Sunday": {
    console.log("It is the weekend");
    break;
  }
  default: {
    console.log("invalid input");
    break;
  }
}

// 6. For a given month, print out in which season it belongs.

let givenMonth = "December";

if (
  givenMonth === "December" ||
  givenMonth === "January" ||
  givenMonth === "February"
) {
  console.log("It is Winter");
} else if (
  givenMonth === "March" ||
  givenMonth === "April" ||
  givenMonth === "May"
) {
  console.log("It is Spring");
} else if (
  givenMonth === "June" ||
  givenMonth === "July" ||
  givenMonth === "August"
) {
  console.log("It is Summer");
} else if (
  givenMonth === "September" ||
  givenMonth === "October" ||
  givenMonth === "November"
) {
  console.log("It is Autumn");
} else {
  //if user types something other than months
  console.log("invalid input");
}
