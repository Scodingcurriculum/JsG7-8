//Objects
//Objects are like magical boxes that can store information and actions. Just like a toy box holds toys, an object holds data and functions related to a specific thing, making it easier to work with in coding.

//Objects are created using curly braces {} notation. Attributes and methods are defined within these curly braces using a key-value format, where each key and its associated value are separated by a colon :. Multiple key-value pairs are separated by commas, .


//Example
console.log("In this example we created an object named person.The object contains properties like name, age, city, and isStudent to store information about a person. \n")

const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
  isStudent: true,
};

console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("City: " + person.city);
console.log("Is Student: " + person.isStudent);


//In the above example we created an object named person.

//The object contains properties like name, age, city, and isStudent to store information about a person.

//We access and print these properties using console.log, allowing us to see the person's name, age, city, and student status.

//Objects are useful for organizing related information and making it easy to work with in your code.

console.log(`\n`)
//________________________________________________________________________________________________________________

//Imagine you have a superhero action figure. This action figure (object) has special moves (methods) it can perform. For example, it can fly, shoot webs, or even glow in the dark.

//In JavaScript, objects are like these action figures, and methods are their special moves. Here's a simple code example: 

// Imagine a superhero action figure
console.log("Object method Example")

const superhero = {
  name: "WebSlinger",
  fly: function() {
    console.log("The superhero is flying!");
  },
  shootWebs: function() {
    console.log("Thwip! Thwip! Shooting webs!");
  }
};

// Using the superhero's methods
superhero.fly();        // Calls the fly method
superhero.shootWebs();  // Calls the shootWebs method


console.log("\n")
//_______________________________________________________________________________________________________________________________



//This Keyword
//Think of "this" as a superhero cape. When a superhero wears their cape, it helps them know who they are and what powers they have. Similarly, in JavaScript, "this" helps a function know which object it belongs to and gives it access to the object's special moves (methods) and information (properties).

//Here's a simple example:
// Imagine a superhero object
console.log("This Keyword Example")

const superheroo = {
  name: "WebSlinger",

  // Define a special move method
  specialMove: function() {
    // Inside the method, 'this' refers to the superhero object
    console.log("This superhero is " + this.name);
  }
};

// Calling the superhero's special move
superheroo.specialMove();

//__________________________________________________________________________________________________________
console.log("\n")


//Javascript classes
//Let's understand JavaScript classes with a simple analogy:

//Imagine you want to create a blueprint for a robot. This blueprint defines how the robot should look, what actions it can perform, and what information it can store. In JavaScript, a class is like that blueprint for creating objects.

//Here's a simple example:
// Define a class named Robot
console.log("Javascript class Example")

class Robot {
  // Constructor method is called when a new robot is created
  constructor(name) {
    // Properties define the robot's characteristics
    this.name = name;
  }

  // Method defines an action the robot can perform
  introduce() {
    console.log("Hello, I am " + this.name + "!");
  }
}

// Create a new robot object using the Robot class
const robot1 = new Robot("RoboBot");
const robot2 = new Robot("TechBot");

// Call the introduce method for each robot
robot1.introduce();
robot2.introduce();

//In this example:

//Robot is a class that serves as a blueprint for creating robots.
//The constructor method is like the initial setup when a new robot is created.
//name is a property that defines a characteristic of the robot.
//introduce is a method that defines an action the robot can perform.
//robot1 and robot2 are instances (objects) created using the Robot class.
//So, a JavaScript class is like a blueprint that helps you create objects with specific characteristics and behaviors.



