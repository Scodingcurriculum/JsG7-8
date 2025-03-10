//Parameters
//A parameter is a variable or placeholder used in a function to receive values that are provided when the function is called. It's like a slot where you can put information when calling a function.
//A function can have any number of parameters.

//Example
console.log("Parameter Example")

// Here, 'name' is a parameter of the 'greet' function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// When we call the 'greet' function, we provide an argument for the 'name' parameter
greet("Alice"); // "Alice" is the argument passed to the 'name' parameter
greet("Bob");   // "Bob" is the argument passed to the 'name' parameter


//Parameter Rules

//Naming: A parameter name must be a valid JavaScript identifier (no spaces, special characters, or numbers).
//Declaration: Declare parameters inside a function's parentheses.
//Count: Ensure the number of parameters matches the number of arguments when calling the function.
//Default Values: Assign default values to parameters for optional inputs.
//Order Matters: Arguments passed correspond to parameters in order.
//Parameter Scope: Parameters are local to the function and don't affect variables outside the function.






console.log("\n")
//________________________________________________________________________________________________________________

//In JavaScript, "arguments" are the actual values or data that you pass to a function when you call it. Arguments are the values that correspond to the parameters defined in the function. They provide the function with the specific data it needs to perform its task.

//Example
console.log("Argument Example")
function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(3, 4);
console.log(result); // Output: 7

//In this example:
//addNumbers is a function that takes two parameters, a and b.
//When we call addNumbers(3, 4), we are passing the values 3 and 4 as arguments.
//Inside the function, a will be 3, and b will be 4.
//The function then adds these two arguments together and returns the result.
//So, in this case, 3 and 4 are the arguments that are used as values for the parameters a and b in the function. Arguments are like the data you provide to a function to get specific results.

console.log("\n")
//________________________________________________________________________________________________________________

//arguments objects
// The "arguments" object is like a magic box that holds all the things we give to a function.
// Even if we don't know what things will be put in, the "arguments" object helps us see them.

console.log("Arguments Object Example")

function addNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const resultt = addNumbers(3, 5, 7, 2);
console.log(resultt); // This will print 17
//In this example, the "arguments" object allows us to add up all the numbers, even though we didn't know in advance how many there would be. It's like a magic box that helps the function work with any number of values.

console.log("\n")
//________________________________________________________________________________________________________________

//Template strings
////Template strings are a new feature in ES6 that allow you to embed expressions and variables inside strings.

//Think of a template string as a special kind of sentence where you can fill in the blanks with your own words or numbers. You use special markers like ${} to show where you want to put something different.

//For example, if you want to say, "My name is [your name]," you can create a template string like this:
console.log("Template String Example")

const name = "Alice";
const sentence = `My name is ${name}.`;
console.log(sentence); // Output: "My name is Alice."




