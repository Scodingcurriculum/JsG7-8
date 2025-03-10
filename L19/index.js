//An array is like a magical backpack holding many items. Just like you can put your favourite toys, candies, and books in your backpack, an array can hold different things too. It's like having a collection of treasures in one place. Each item in the array has a number, just like the items in your backpack have a spot. You can use those numbers to find and play with your treasures or items. Arrays are like your special backpack for storing and organizing many things in a computer program.

//Example
console.log("Accessing array item using index")
const backpack = ["toy car", "candies", "coloring book"];
console.log(backpack[1]); // It will show "candies" because it's at index 1.

//In this example, backpack is an array that holds different items, and we use the index (in this case, 1) to find and show the "candies" item from the backpack, just like you would find a toy or candy from your own special backpack.

console.log("\n")
//------------------------------------------------------------------------------------------------------------------

//Array Class


//Some common properties and methods for arrays in JavaScript

// Array Properties
console.log("length: Returns the number of elements in the array.")
// length: Returns the number of elements in the array.
const fruits = ["apple", "banana", "cherry"];
const numFruits = fruits.length;
console.log("Length of array is "+numFruits); // 3

console.log("\n")

// Array Methods
console.log("push(): Adds one or more elements to the end of the array.")
// push(): Adds one or more elements to the end of the array.
const colors = ["red", "blue"];
colors.push("green", "yellow");
console.log(colors);
// Now the `colors` array contains: ["red", "blue", "green", "yellow"]

console.log("pop(): Removes the last element from the array.")
// pop(): Removes the last element from the array and returns it.
const numbers = [1, 2, 3, 4];
const lastNumber = numbers.pop();
console.log(lastNumber); // 4
// `numbers` becomes: [1, 2, 3]

console.log("unshift(): Adds one or more elements to the beginning of the array.")
// unshift(): Adds one or more elements to the beginning of the array.
const days = ["Tuesday", "Wednesday"];
days.unshift("Monday", "Sunday");
console.log(days)
// Now the `days` array contains: ["Monday", "Sunday", "Tuesday", "Wednesday"]

console.log("shift(): Removes the first element from the array.")
// shift(): Removes the first element from the array and returns it.
const animals = ["dog", "cat", "rabbit"];
const firstAnimal = animals.shift();
console.log(animals);
// `animals` becomes: ["cat", "rabbit"]

console.log("indexOf(): Returns the index of the first occurrence of a specified element in the array.")
// indexOf(): Returns the index of the first occurrence of a specified element in the array.
const fruitss = ["apple", "banana", "cherry"];
const index = fruits.indexOf("banana");
console.log(index); // 1

console.log("slice(): Creates a new array by extracting a portion of the original array.")
// slice(): Creates a new array by extracting a portion of the original array.
const colorss = ["red", "blue", "green", "yellow"];
const selectedColors = colorss.slice(1, 3);
console.log(selectedColors); // `selectedColors` contains: ["blue", "green"]

console.log("splice(): Changes the contents of an array by removing or replacing elements.")
// splice(): Changes the contents of an array by removing or replacing elements.
const months = ["January", "March", "April"];
months.splice(1, 0, "February"); // Inserts "February" at index 1
console.log(months); // ["January", "February", "March", "April"]

console.log("concat(): Combines two or more arrays.")
// concat(): Combines two or more arrays.
const vegetables = ["Carrot", "Broccoli"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables); // ["apple", "banana", "cherry", "Carrot", "Broccoli"]
