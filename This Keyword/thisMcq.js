// Scenario 3:
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     getFullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//   var anotherPerson = {
//     firstName: "Jane",
//     lastName: "Smith"
//   };

//   var fullNameFunction = person.getFullName.bind(anotherPerson);
//   console.log(fullNameFunction()); // What will this output, and why?

// // Scenario 4:
// function Dog(name) {
//   this.name = name;
//   this.bark = () => {
//     console.log("Woof, my name is " + this.name);
//   };
// }

// var dog1 = new Dog("Buddy");
// var dog2 = new Dog("Max");

// dog1.bark(); // What will this output, and why?
// dog2.bark(); // What will this output, and why?

// Scenario 5:
// var outerObject = {
//     outerProperty: "I am the outer object",
//     innerObject: {
//       innerProperty: "I am the inner object",
//       getCombinedProperty: function() {
//         return this.outerProperty + " - " + this.innerProperty;
//       }
//     }
//   };

//  console.log(outerObject.innerObject.getCombinedProperty());
// What will this output, and why?

// Scenario 7:
// function Book(title, author) {
//     this.title = title;
//     this.author = author;
//     this.displayInfo = function() {
//       console.log(this.title + " by " + this.author);
//     };
//   }

//   var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
//   var book2 = new Book("To Kill a Mockingbird", "Harper Lee");

//   book1.displayInfo(); // What will this output, and why?
//   book2.displayInfo(); // What will this output, and why?

// Scenario 8:
// function Animal(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   Animal.prototype.makeSound = function() {
//     console.log(this.sound);
//   };

//   var cat = new Animal("Fluffy", "Meow");
//   var dog = new Animal("Buddy", "Woof");

//   cat.makeSound(); // What will this output, and why?
//   dog.makeSound(); // What will this output, and why?

// Scenario 9:
// var numbers = [1, 2, 3, 4, 5];

// var calculator = {
//   factor: 2,
//   multiply: function(number) {
//     return number * this.factor;
//   }
// };

// var multipliedNumbers = numbers.map(calculator.multiply);
// console.log(multipliedNumbers);
// What will this output, and why?

// Scenario 10:
// function greet(name) {
//     console.log(`Hello, ${name}! My name is ${this.fullName}.`);
//   }

//   var person = {
//     fullName: "John Doe"
//   };

//   greet.call(person, "Alice");
//   // What will this output, and why?

// Scenario 11:
// var car = {
//     brand: "Toyota",
//     start: function() {
//       console.log("Starting the engine of the " + this.brand + " car...");
//       setTimeout(function() {
//         console.log("Engine started for " + this.brand + " car.");
//       }, 1000);
//     }
//   };

//   car.start();
//   Reason
//   The error occurs because the this inside the setTimeout callback function is not bound to the car object.
//   In a regular function (not an arrow function), the this value is determined by how the function is called.
//   In this case, inside the setTimeout callback, this refers to the global object (or undefined in strict mode)

// Updated Scenario 11:
// var car = {
//     brand: "Toyota",
//     start: function() {
//       console.log("Starting the engine of the " + this.brand + " car...");
//       setTimeout(() => {
//         console.log("Engine started for " + this.brand + " car.");
//       }, 1000);
//     }
//   };

//   car.start();


// Scenario 12:
// function Counter() {
//     this.count = 0;
  
//     this.increment = function() {
//       this.count++;
//       console.log(this.count);
//     };
  
//     setTimeout(function() {
//       console.log("Timeout: " + this.count);
//     }, 1000);
//   }
  
//   var counter = new Counter();
//   counter.increment();
  