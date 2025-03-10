//Variable is like a labelled jar where you can store different things, just like using a jar to keep marbles or candies. The label helps you find and use what's inside, and you can change what you put in the jar anytime, like swapping candies for marbles. In programming, variables work the same way, holding and organizing data for your computer programs.

//Variables
var name = 'Sam'
console.log(name)

//Identifiers
//Just like you have a name to identify yourself, variables have identifiers to uniquely identify and refer to the data they hold. 
// All JavaScript variables must be identified with unique names.
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter
// Names can also begin with $ and _ 
// Names are case sensitive (y and Y are different variables)
// Reserved words (like JavaScript keywords) cannot be used as names

// Data Types
//Think of data types as different kinds of information. For example, numbers are like counting your marbles. Words are like naming your toys. Yes or no is like answering questions in a game. Data types help the computer know what kind of information it's dealing with, like knowing if it's a number, a word, or a yes/no answer.

//Types of Data Types
// Strings
var name = 'Sam'
var age = 34
var gpa = 4.0
var sentence = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'
console.log(sentence)

// Numbers
var age = 34
var gpa = 4.0
var sentence = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'
console.log(sentence)

//addition of two numbers
var x = 5
var y = 6
var z = x + y
console.log(z)

//subtraction of two numbers
var x = 5
var y = 6
var z = x - y
console.log(z)


//__________________________________________________________________________________________________________



//Program to find current age in seconds
// Define the birth year and current year
const birthYear = 2000; // Change this to your birth year
const currentYear = 2023; // Change this to the current year 

// Calculate the age in seconds
const years = currentYear - birthYear;
const secondsInAYear = 365 * 24 * 60 * 60; // An approximate value for seconds in a year
const ageInSeconds = years * secondsInAYear;

console.log("Your age in seconds is approximately: " + ageInSeconds + " seconds");


