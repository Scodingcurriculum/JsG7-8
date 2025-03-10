//Data Types
//Think of data types like containers for information in a computer. Just like you have different containers at home, such as jars for cookies, boxes for toys, and baskets for fruits, computers have containers for different types of data.
//Numbers: It's like a container for counting things, such as the number of candies you have.
//Counting how many marbles you have: 
let marbles = 10;

//Words(Strings): This container is for names, like the names of your friends or your favourite books.
// Storing your name: 
let name = "Alice";

//Yes/No(Boolean): Imagine a switch that can be either 'on' (yes) or 'off' (no). It's a container for simple choices.
// Switching on a light: 
let lightOn = true;

// Switching off a light: 
let lightOff = false;

//When adding a number and a string, JavaScript will treat the number as a string.
// Adding a number and a string: 
let numberOfPets = "I have 2 pets";
let numberOfPets2 = 2;
let numberOfPets3 = numberOfPets + numberOfPets2;
console.log(numberOfPets3);

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let o = 2 + 8 + "Ferrari";
console.log(o);

//JavaScript has dynamic types. This means that the same variable can hold different data types:
let p; // Now p is undefined
p = 5; //Now p is a Number
p = 'John'; // Now p is a String

//Strings are written with quotes. You can use single or double quotes:
let s = "John";
let s2 = 'John';

//JavaScript has only one type of number. Numbers can be written with or without decimals:
let n = 34;
let n2 = 3.14;

//Booleans are either true or false:
let x = 10;
let y = 78;
let z = 10;
console.log(x == y); // Returns false
console.log(x == z); // Returns true


//________________________________________________________________________________________________________________

//JavaScript Arrays
// Arrays are containers for storing multiple values.
// Arrays are written with square brackets:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);


//Objects
////Objects are like magical boxes that can store information and actions. Just like a toy box holds toys, an object holds data and functions related to a specific thing, making it easier to work with in coding.
// Objects are written with curly brackets:
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);


//typeof Operator
// The typeof operator returns the type of a JavaScript variable:
let x1 = "John";
let x2 = new String("John");
console.log(typeof x1);
console.log(typeof x2);



