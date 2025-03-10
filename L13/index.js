// The return statement is a crucial part of functions in JavaScript. It serves two primary purposes:

//When a function has a return statement, it means the function can produce a result, like a number, a string, or even an object. This result is often called the "return value" or "output" of the function.

//For example, a function can perform calculations and return the result:
console.log("Example 1")
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(3, 4); // The 'return' statement provides the sum (7)
console.log(sum); // Output: 7

console.log("\n")
//___________________________________________________________________________________________________________
//Exiting the Function: The return statement also acts as a signal for the function to stop execution and exit. Once a return statement is encountered in a function, the function stops running, and the control is returned to the part of the code that called the function.

//Here's an example where the return statement ends the function:
console.log("Example 2")

function isPositive(number) {
  if (number > 0) {
    return true; // Returns 'true' and exits the function
  }
  return false; // This line is not executed
}
console.log(isPositive(-5)); // Output: false

//It's important to note that a function can have multiple return statements, but only one of them will be executed during the function's call. Once a return statement is executed, the function's execution ends, and any subsequent code within the function is ignored.
