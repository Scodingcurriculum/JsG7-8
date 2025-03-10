//Object Properties
//Let's dive into object properties with a simple analogy:

// Imagine you have a toy car. This toy car has various properties like color, size, and speed. In JavaScript, an object property is similar to these characteristics. It defines the attributes or features of an object.

// Here's a code example using a car analogy:

// Define a car object with properties

console.log("Object Properties Example")

const toyCar = {
  color: "red",
  size: "small",
  speed: "medium",

  // Method to describe the car
  describe: function() {
    console.log(`This car is ${this.color}, ${this.size}, and has a ${this.speed} speed.`);
  }
};

// Access and modify properties
console.log(`Color before: ${toyCar.color}`); // Accessing the color property
toyCar.color = "blue"; // Modifying the color property
console.log(`Color after: ${toyCar.color}`);

// Calling the describe method to see the car's details
toyCar.describe();


//In this example:

//toyCar is an object with properties like color, size, and speed.
//The describe method provides information about the car.
//We access and modify the color property.
//Finally, the describe method is called to see the updated details.
//So, in JavaScript, object properties are like the characteristics that define an object, just as color, size, and speed define a toy car.

console.log("\n")
console.log("Deleting Object Properties")
//________________________________________________________________________________________________________________
//Deleting object properties
//In JavaScript, you can delete object properties using the delete keyword.
//Let's understand deleting properties from an object with a simple analogy:

//Imagine you have a backpack with different compartments. Each compartment represents a property of the backpack. Now, if you decide that you no longer need a particular compartment, you can remove it. Similarly, in JavaScript, you can delete properties from an object.

//Here's a code example:
// Define an object representing a backpack
const backpack = {
  mainCompartment: "books",
  frontPocket: "snacks",
  sidePocket: "water bottle"
};

// Display the original backpack
console.log("Original backpack:", backpack);

// Deleting a property (sidePocket) from the backpack
delete backpack.sidePocket;

// Display the backpack after deleting the property
console.log("Backpack after deleting a property:", backpack);



console.log("\n")
//________________________________________________________________________________________________________________
console.log("Object Method Example")
// Object Methods
//Let's explore JavaScript object methods using a fun analogy:

//Imagine you have a remote control for your robot. This remote control (method) allows you to make your robot do different actions. In JavaScript, an object method is like these actions your object can perform.

//Here's a code example with a robot analogy:
// Define a robot object with methods
const robot = {
  name: "RoboBot",

  // Method to introduce the robot
  introduce: function() {
    console.log("Hello, I am " + this.name + "!");
  },

  // Method to perform a dance
  dance: function() {
    console.log(this.name + " is dancing!");
  }
};

// Calling the methods to make the robot perform actions
robot.introduce();
robot.dance();

//In this example:

//robot is an object with properties like name.
//introduce and dance are methods, representing actions the robot can perform.
//We call these methods to make the robot introduce itself and dance.
//So, in JavaScript, object methods are like the buttons on your robot remote control that trigger specific actions your object can take.

