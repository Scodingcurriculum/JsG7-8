//A while loop is like a game where you have a rule, and you keep playing the game as long as the rule is true. 
//For example, imagine you want to jump as high as you can. You start jumping, and while you can jump higher, you keep going. But when you can't jump any higher, you stop.
  
// A while loop in JavaScript is used to repeatedly execute a code block as long as a specified condition is true. It's like saying, "Keep doing this as long as something is true." Here's the basic structure of a while loop in JavaScript:
// while (condition) {
  // Code to be executed as long as the condition is true
//Code updation
// }

//Example
console.log("While loop \n")
var i = 0; // Initialize a counter variable 'i'

while (i < 10) { // Start a while loop that runs as long as 'i' is less than 10
  var text = "The number is " + i; // Create a text string with the current number
  console.log(text); // Print the text to the console
  i++; // Increment the counter variable 'i' for the next iteration
}

//Note: It is very important to set a condition that will become false otherwise, the code editor will crash. 

// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9


//__________________________________________________________________________________________________________
console.log("\n")

//do while loop
//A `do...while` loop is like playing a game where you do something, and then you check if you should do it again. You keep doing it until the rule says you can stop. It's like eating cookies from a jar – you eat one, then check for more cookies, and if there are more, you keep eating.
// A do-while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. Here's the basic structure of a do-while loop in JavaScript:
// do {
  // Code to be executed
// }
// while (condition);

//In this structure:
//The code inside the do block is executed first.
//After executing the code, the condition is checked.
//If the condition is true, the loop continues, and the code block is executed again.
//If the condition is false, the loop stops.

console.log("do while loop \n"); // Print a message indicating the use of a do...while loop

var i = 0; // Initialize a counter variable 'i'

do {
  var text = "The number is " + i; // Create a text string with the current number
  console.log(text); // Print the text to the console
  i++; // Increment the counter variable 'i' for the next iteration
} while (i < 10); // Continue the loop until 'i' is less than 10

//Note: It is very important to set a condition that will become false otherwise code editor will crash. 
