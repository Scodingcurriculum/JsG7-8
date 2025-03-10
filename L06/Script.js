//Conditional Statements
// Conditional statements in a computer program are like making choices in everyday life. You can say "if this happens, do this; otherwise, do something else." It's a way for the computer to make decisions based on certain conditions, just like you make choices in different situations.

//IF Statement:
//Imagine you're going to a picnic. You might say, "If it's a sunny day, we'll go to the park for the picnic." This means if the weather is sunny, you go for a picnic; otherwise, you won't.

//ELSE Statement:
//Think about getting ready for school. You might say, "If I find my red shoes, I'll wear them to school; otherwise, I'll wear my blue shoes." If you find red shoes, you wear them; otherwise, you wear the blue ones.

//ELSE IF Statement:
//Suppose you have a game night with friends. You say, "If Sarah can come, we'll play board games; else if she's busy, we'll play card games; otherwise, we'll watch a movie." You have different options based on Sarah's availability.


// If statement
const temperature = 25;
if (temperature > 30) {
  console.log("It's a hot day!"); // This code block executes if the condition is true.
}

// If-else statement
if (temperature > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's not a hot day."); // This code block executes if the condition is false.
}

// If-else if-else statement
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day."); // This code block executes if the previous condition is false and this one is true.
} else {
  console.log("It's a cold day."); // This code block executes if all previous conditions are false.
}

console.log("\n")
//_________________________________________________________________________________________________________

//Functions
//Functions are like your favourite superhero who can do amazing things. Just like Spider-Man can swing from building to building or shoot webs, a function can perform its own special 'superpower' tasks. You can ask your superhero (function) to use their powers by calling their name. They help you with different tasks, like solving math problems, drawing pictures, or playing your favourite song. Functions make your computer programs smart and do what you want

// Functions are declared using the function keyword. Functions can be assigned to variables. Functions can be passed as arguments to other functions. Functions can be returned from other functions.

//Functions can be called multiple times

//Example1
function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Call the function to display the message "Hello, World!"
//In this example, the sayHello function doesn't take any input values but instead directly displays the message "Hello, World!" when called. 

//_________________________________________________________________________________________________________

console.log("\n")

//Numbers
//JavaScript has only one type of number. Numbers can be written with or without decimals.
var x = 3.14; //Number with decimals
var y = 3; //Number without decimals


  
//JavaScript allows you to perform various operations on numbers. 
//Addition (+): You can use the + operator to add two or more numbers together.
var a = 10;
var b = 20;
var c = a + b; //c will be 30
console.log(c);
  
//Subtraction (-): You can use the - operator to subtract one number from another.
var d = 20;
var e = 10;
var f = d - e; //f will be 10
console.log(f); 
  
//Multiplication (*): You can use the * operator to multiply two numbers.
var g = 10;
var h = 2;
var i = g * h; //i will be 20
console.log(i);
  
//Division (/): You can use the / operator to divide one number by another.
var j = 20;
var k = 2;
var l = j / k; //l will be 10
console.log(l);
  
//Modulus (%): You can use the % operator to find the remainder of a division operation.
var m = 20;
var n = 2;
var o = m % n; //o will be 0
console.log(o);
  
//Exponentiation (**): You can use the ** operator to raise one number to the power of another.
var p = 10;
var q = 2;
var r = p ** q; //r will be 100
console.log(r);

//__________________________________________________________________________________________________________

//When a string and number are added together, the result is a string, not a number.
var s = "10"; //s is a string
var t = 2; //t is a number
var u = s + t; //u will be 102
console.log(u);


//__________________________________________________________________________________________________________

console.log("\n")

//Score to Percentage Converter

// Define the student's score and the maximum possible score.
let studentScore = 85;
let maxScore = 100;

// Calculate the percentage.
let percentage = (studentScore / maxScore) * 100;

// Display the result.
console.log(`Student scored ${studentScore} out of ${maxScore}, which is ${percentage}%.`);



