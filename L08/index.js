//Boolean
//In the world of computers, we have something called "booleans," and they are like magic spells that can give you a "yes" or a "no" answer.
//Imagine you have a magic crystal ball, and you can ask it questions. It can either say "yes" (true) or "no" (false).
//In JavaScript, a boolean is a data type that represents one of two values: true or false. 

let isSunny = true;
let hasIceCream = false;

//You can use Boolean() function to find out if an expression is true or false.

console.log(Boolean(10>20));

//Booleans are obtained when comparing values using comparison operators. For example:

let isEqual = 5 === 5; // isEqual will be true
console.log(isEqual);
let isNotEqual = 5 != 5; // isNotEqual will be false
console.log(isNotEqual);
let isGreater = 5 > 5; // isGreater will be false
console.log(isGreater);
let isLess = 5 < 5; // isLess will be false
console.log(isLess);
let isGreaterOrEqual = 5 >= 5; // isGreaterOrEqual will be true
console.log(isGreaterOrEqual);
let isLessOrEqual = 5 <= 5; // isLessOrEqual will be true
console.log(isLessOrEqual);


console.log("\n")

//Everything with a Value is true
var k = 20;
console.log(Boolean(k)); // true

//Everything without a Value is false
var j = 0;
console.log(Boolean(j)); // false

//Boolean value of NaN is false
var x = 10/"J";
console.log(Boolean(x)); // false

//Boolean value of null is false
var y = null;
console.log(Boolean(y)); // false

//Boolean value of False is false
var z = false;
console.log(Boolean(z)); // false

//Boolean value of "" (empty string) is false
var s = "";
console.log(Boolean(s)); // false


console.log("\n")
//________________________________________________________________________________________________________________
// JavaScript Arithmetic Operators
// JavaScript has the following types of arithmetic operators: 
// + Addition (+)
// - Subtraction (-)
// * Multiplication (*)
// / Division (/)
// % Modulus (%)
// ++ Increment (++)
// -- Decrement (--)

//Addition operator
console.log(7 + 9)

//Subtraction operator
console.log(15 - 7)

//Multiplication operator
console.log(7 * 9)

//Division operator
console.log(15 / 7)

//Modulus operator
console.log(15 % 7)

//Exponent operator
console.log(7 ** 9)

//Increment Operator
let x1 = 7;
x1++;
console.log(x1);

//Decrement Operator
let x2 = 7;
x2--;
console.log(x2);



