//A string is like a line of letters, words, or even emojis that you can see and read. It's like a sentence in a storybook or a message you write to your friends. Strings can be used to say hello, tell stories, or even describe your favourite animal. In computer programs, we use strings to work with words and text, just like writing a note or a fun message. In strings, characters are enclosed in single ('') or double ("") quotes. 

const greeting = "Hello, World!";
const name = 'Alice';
console.log(greeting)
console.log(name)


//__________________________________________________________________________________________________________________

//Escape Characters
//An escape character is a special character used in a string to represent another character that would otherwise have a special meaning in the string.

//Here are some common uses of escape characters in strings:

// 1. Escaping Quotes:
// \" is used to include a double quote within a double-quoted string.
// \' is used to include a single quote within a single-quoted string.
let doubleQuoted = "He said, \"Hello!\"";
let singleQuoted = 'She\'s happy.';
console.log(doubleQuoted); // Output: He said, "Hello!"
console.log(singleQuoted); // Output: She's happy.

// 2. New Lines:
// \n is used to insert a newline in a string.
let newLine = "Hello\nWorld!";
console.log(newLine); // Output: 
// Hello
// World!

// 3. Tab:
// \t is used to insert a tab in a string.
let tab = "Hello\tWorld!";
console.log(tab); // Output: Hello    World!

// 4. Backslash:
// \\ is used to include a backslash in a string.
let backslash = "Hello\\World!";
console.log(backslash); // Output: Hello\World!

// 5. Unicode Characters:
// Unicode characters are used to represent special characters that are not included in the basic ASCII character set.
let unicode = "Hello\u00A9 World!";
console.log(unicode); // Output: Hello© World!

// 6. Backspace:
// \b is used to insert a backspace in a string.
let backspace = "Hello\bWorld!";
console.log(backspace); // Output: HellWorld!

// 7. Form Feed:
// \f is used to insert a form feed in a string.
let formFeed = "Hello\fWorld!";
console.log(formFeed); // Output: 
// Hello
// World!

// 8. Carriage Return:
// \r is used to insert a carriage return in a string.
let carriageReturn = "Hello\rWorld!";
console.log(carriageReturn); // Output: World!

// 9. Vertical Tab:
// \v is used to insert a vertical tab in a string.
let verticalTab = "Hello\vWorld!";
console.log(verticalTab); // Output: 
// Hello
// World!

// 10. Line Separator:
// \u2028 is used to insert a line separator in a string.
let lineSeparator = "Hello\u2028World!";
console.log(lineSeparator); // Output: 
// Hello
// World!

//________________________________________________________________________________________________________________
//String property
//length: Returns the number of characters in the string.
const text = "Hello, World!";
const length = text.length; // 13
console.log(length)

//String method
//concat(string): Combines two strings.
const text1 = "Hello";
const text2 = "World";
const combinedText = text1.concat(" ", text2); // "Hello World"
console.log(combinedText)
