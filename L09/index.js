
//Loops are like when you're playing with your toy car and you push it around the track again and again. You keep going until you're satisfied or until someone says stop. In computer programs, loops help us repeat actions, like printing your name multiple times or drawing a pattern, so we don't have to do it manually each time.

//Types of Loops:
//For Loop: Used for repeating a task a specific number of times.

//While Loop: Repeats a task while a condition is true.

//Do-While Loop: Like a while loop but guarantees at least one execution.

//For-In Loop: Used for looping through object properties.

//For-Of Loop: Used for looping through array elements.

//ForEach Loop: Specialized for looping through array elements with a simpler syntax.

//________________________________________________________________________________________________________________

//For Loop
//For loop is like when you want to count from 1 to 10 while playing a game. You start at 1, and you count up one by one until you reach 10. It's like taking small steps to finish a race. In computer programs, we use 'for' loops to do things over and over again for a specific number of times, just like counting from 1 to 10, but we can do it quickly! It consists of three parts: initialization, condition, and increment or decrement.

//Syntax
//for (initialization; condition; iteration) {
    // Code to be executed in each iteration }
// Here's a breakdown of each part of the for loop syntax:

//initialization: This is where you initialize a loop control variable. It typically starts with setting a variable, but it can include multiple variables separated by commas. This part is executed only once at the beginning of the loop.

//condition: This is a condition that is checked before each iteration. If the condition is true, the loop continues to run; if it's false, the loop stops.

//iteration: This is an expression that is evaluated at the end of each iteration. It's usually used to update the loop control variable.

//Inside the curly braces {} are the statements or code that you want to execute in each iteration of the loop.

//Instead of writing

console.log("Numbers from 1-10  without using loop")
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

//You can write it like this using loop:
//Here's a for-loop example that prints numbers from 1 to 10:
console.log("\n")
console.log("Here's a for-loop example that prints numbers from 1 to 10:")
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 //Explanation: Initialization: let i = 1 set up a variable i and initialize it to 1. This is done once before the loop starts.
//Condition: i <= 10 defines the condition for the loop to run. The loop will continue as long as i is less than or equal to 10.
//Increment: i++ is executed at the end of each iteration, increasing the value of i by 1. This is done after each iteration.
//The loop will continue until the condition is false.

//______________________

//for-in Loop: It is used to iterate through the properties (keys) of an object in JavaScript. Here's the syntax for a for-in loop:
// for (let key in object) {
    // Code to be executed for each property }

//Here's an example of a for-in loop that iterates through the properties of an object:

var person = {
  fname: "John",
  lname: "Doe",
  age: 25
};
console.log("\n")
console.log("Here's an example of a for-in loop that iterates through the properties of an object:")
let x;
for (x in person) {
  console.log(x + ": " + person[x]);
}
//Explanation: Initialization: let x in person defines a variable x and initializes it to the properties of the person object.
//Condition: x in p


console.log("\n")

//Looping over an Array 
//Looping over an array is a common task in JavaScript. Here's an example of a for loop that iterates through an array:
// Looping over an array
console.log("Looping over an Array")
var cars = ["BMW", "Volvo", "Mini"];

for (var y of cars) {
  console.log(y); // Use console.log to print elements
}
//Explanation: Initialization: var y of cars defines a variable y and initializes it to the elements of the cars array.
//Condition: y of cars
//Increment: y of cars
//The loop will continue until the condition is false.

console.log("\n")

// Looping over a string
console.log("Looping over a string"); // Print a message

var txt = "JavaScript"; // Define a string variable

for (var j of txt) { // Start a for...of loop to iterate through the characters in the string
  console.log(j); // Print each character to the console
}

