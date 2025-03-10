//String property
console.log("length: Returns the number of characters in the string.")
//length: Returns the number of characters in the string.
const text = "Hello, World!";
const length = text.length; // 13
console.log(length)

//String methods
console.log("charAt(index): Returns the character at the specified index.")
//charAt(index): Returns the character at the specified index.
const b = "Coding";
const char = b.charAt(3); // "i"
console.log(char)

//substring(start, end): Extracts and returns a portion of the string between the specified start and end indices.
console.log("substring(start, end): Extracts and returns a portion of the string between the specified start and end indices.")
const sentence = "This is a sample sentence.";
const part = sentence.substring(5, 7); // "is"
console.log(part)

console.log("toUpperCase(): Converts all characters in the string to uppercase.")
//toUpperCase(): Converts all characters in the string to uppercase.
const text8 = "Hello, World!";
const uppercaseText = text8.toUpperCase(); // "HELLO, WORLD!"
console.log(uppercaseText)

console.log("toLowerCase(): Converts all characters in the string to lowercase.")
//toLowerCase(): Converts all characters in the string to lowercase.
const text3 = "Hello, World!";
const lowercaseText = text3.toLowerCase(); // "hello, world!"
console.log(lowercaseText)

console.log("concat(string): Joins two or more strings.")
//concat(string): Combines two strings.
const text1 = "Hello";
const text2 = "World";
const combinedText = text1.concat(" ", text2); // "Hello World"
console.log(combinedText)

console.log("includes(string): Returns true if the string contains the specified string.")
//includes(string): Returns true if the string contains the specified string.
const text10 = "Hello, World!";
const includesText = text10.includes("World"); // true
console.log(includesText)

console.log("indexOf(string): Returns the index of the first occurrence of the specified string.")
//indexOf(string): Returns the index of the first occurrence of the specified string.
const text11 = "Hello, World!";
const index = text11.indexOf("World"); // 7
console.log(index)

console.log("lastIndexOf(string): Returns the index of the last occurrence of the specified string.")
//lastIndexOf(string): Returns the index of the last occurrence of the specified string.
const text12 = "Hello, World!";
const indexx = text12.lastIndexOf("World"); // 7
console.log(indexx)

console.log("replace(string1, string2): Replaces the first occurrence of the specified string with the specified replacement string.")
//replace(string1, string2): Replaces the first occurrence of the specified string with the specified replacement string.
const text13 = "Hello, World!";
const replacedText = text13.replace("World", "JavaScript"); // "Hello, JavaScript!"
console.log(replacedText)

console.log("slice(start, end): Extracts a section of a string and returns it as a new string.")
//slice(start, end): Extracts a section of a string and returns it as a new string.
const text14 = "Hello, World!";
const slicedText = text14.slice(6, 11); // " Worl"
console.log(slicedText)

console.log("split(separator): Splits a string into an array of substrings by the specified separator.")
//split(separator): Splits a string into an array of substrings by the specified separator.
const text15 = "Hello, World!";
const splitText = text15.split(","); // ["Hello", " World!"]
console.log(splitText)

console.log("startsWith(string): Returns true if the string starts with the specified string.")
//startsWith(string): Returns true if the string starts with the specified string.
const text16 = "Hello, World!";
const startsWithText = text16.startsWith("Hello"); // true
console.log(startsWithText)

console.log("endsWith(string): Returns true if the string ends with the specified string.")
//endsWith(string): Returns true if the string ends with the specified string.
const text17 = "Hello,World!";
const endsWithText = text17.endsWith("World"); // false
console.log(endsWithText)

console.log("trim(): Removes whitespace from both ends of a string.")
//trim(): Removes whitespace from both ends of a string.
const text18 = "  Hello, World!  ";
const trimmedText = text18.trim(); // "Hello, World!"
console.log(trimmedText)


console.log("\n")
//_______________________________________________________________________________________________________________
//Numbers
console.log("Number properties")

// Properties

// MAX_VALUE: Represents the maximum numeric value representable in JavaScript.
console.log("MAX_VALUE: Represents the maximum numeric value representable in JavaScript.")
const maxNumber = Number.MAX_VALUE;
console.log("Maximum Number Value:", maxNumber);

console.log("MIN_VALUE: Represents the smallest positive numeric value representable in JavaScript.")
// MIN_VALUE: Represents the smallest positive numeric value representable in JavaScript.
const minNumber = Number.MIN_VALUE;
console.log("Minimum Number Value:", minNumber);

console.log("POSITIVE_INFINITY: Represents infinity.")
// POSITIVE_INFINITY: Represents positive infinity.
console.log("Positive Infinity:", Number.POSITIVE_INFINITY);

console.log("NEGATIVE_INFINITY: Represents negative infinity.")
// NEGATIVE_INFINITY: Represents negative infinity.
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY);

console.log("NaN: Represents a Not-a-Number value.")
// NaN: Represents "Not-a-Number."
console.log("NaN:", Number.NaN);

console.log("\n")
// Methods
console.log("Number methods")
console.log("\n")

console.log("parseInt(string): Converts a string to an integer.")
// parseInt(string): Converts a string to an integer.
const text19 = "123";
const number1 = parseInt(text19); // 123
console.log("parseInt:", number1);

console.log("parseFloat(string): Converts a string to a floating-point number.")
// parseFloat(string): Converts a string to a floating-point number.
const text24 = "123.45";
const number5 = parseFloat(text24); // 123.45
console.log("parseFloat:", number5);

console.log("toString(number): Converts a number to a string.")
// toString(): Converts a number to a string.
const number4 = 123;
const text20 = number4.toString(); // "123"
console.log("toString:", text20);

console.log("toFixed(digits): Formats a number using fixed-point notation with a specified number of digits.")
// toFixed(digits): Formats a number using fixed-point notation with a specified number of digits.
const pi = 3.14159;
const roundedPi = pi.toFixed(2); // "3.14"
console.log("toFixed:", roundedPi);

console.log("Math.round(x): Rounds a number to the nearest integer.")
// Math.round(x): Rounds a number to the nearest integer.
const roundedNumber = Math.round(4.7); // 5
console.log("Math.round:", roundedNumber);

console.log("Math.floor(x): Rounds a number down to the nearest integer.")
// Math.floor(x): Rounds a number down to the nearest integer.
const floorNumber = Math.floor(4.7); // 4
console.log("Math.floor:", floorNumber);

console.log("Math.ceil(x): Rounds a number up to the nearest integer.")
// Math.ceil(x): Rounds a number up to the nearest integer.
const ceilNumber = Math.ceil(4.2); // 5
console.log("Math.ceil:", ceilNumber);

console.log("Math.random(): Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).")
// Math.random(): Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
const randomValue = Math.random();
console.log("Math.random:", randomValue);




