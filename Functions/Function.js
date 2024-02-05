////////////////////////////////////////////
// There are three Types of functions in js

// 1) Function declartion
// Fun that can be used before its declared

// console.log(SubMarks(20));
// function SubMarks(Marks) {
//   return 100 - Marks;
// }

// 2) Function Expression
// Essentially a fun value stored in varible ,

// Function that can't be used before its declred
// var Subjects = function (Marks) {
//   return 100 - Marks;
// };
// console.log(Subjects(20));

// 3) Arrow fun()
// Great for quick one line functions and has no this keyword

// var Subjects = (Marks) => 100 - Marks;
// console.log(Subjects(20));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* * Functions are first class citizen in js
 * This means that functions are simply values
 * Functions are just another type of object
 */

/* HIGER ORDER FUNCTION
function that recives anothher function as an argument, that return new fun or both
 */

// passing fun to another fun
// function sayHello() {
//     return "hello";
//   }
//   function greeting(helloMsg, name) {
//     console.log(helloMsg() + " " + name);
//   }
//   greeting(sayHello, "javascript");

// return fun from fun
// function sayHello() {
//   return function () {
//     console.log("hii");
//   };
// }
// const myfun = sayHello();
// myfun();

//using double parentheses
// function sayHello() {
//   return function () {
//     console.log("hii");
//   };
// }
// sayHello()();

// function count() {
//   let counter = 0;
//   return function () {
//     console.log(++counter);
//   };
// }
// count()();

// Prog for radius, circumfrance and diameter
// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumfrance = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumfrance));
// console.log(calculate(radius, diameter));

///////////////////////////////////////////////
// CallBack Function
// a callback is fun passed as an arg to another fun

// function greeting(name) {
//   alert("hello" + name);
// }
// function ProcessUserInput(callback) {
//   var name = prompt("Please enter Name");
//   callback(name);
// }
// ProcessUserInput(greeting);

// async callBack
// function greet() {
//   console.log("Hello");
// }
// function sayName(name) {
//   console.log("Hello" + name);
// }
// setTimeout(greet, 2000);
// sayName("Bhavesh");

// IIFE
//self executing anonymous fun
// Enclosed with grouping operator()
// (function () {
//   var name = "Barry";
//   console.log(name);
// })();

///////////////////////////
// factory function
// When a function creates an object, it is called a factory function. The createPerson() is a factory function
// because it returns a new person object.

// function PersonDetails(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     getFullName() {
//       return firstName + " " + lastName;
//     },
//   };
// }
// let FafDetails = PersonDetails("Faf", "duplesis");
// let JoshDetails = PersonDetails("Josh", "hazalwood");
// console.log(FafDetails.getFullName());
// console.log(JoshDetails.getFullName());

// https://www.javascripttutorial.net/javascript-factory-functions/

///////////////////////////
//*** comperator fun ********
// const arr = [20, 50, 100, 40];
// const comparator = (a, b) => a - b;
// console.log(arr.sort(comparator));

///////////////////////////
// function currying
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const mul = (a) => (b) => (c) => a * b * c;

// console.log(sum(10)(20)(30));
// console.log(mul(2)(3)(4));
// applications

// Infinite currying 
// function add(a){
//   return function(b){
//     if(!b){
//       return a;
//     }else{
//       return add(a + b)
//     }
//   }
// }

// console.log(add(10)(10)(30)(40)(50)())


///////////////////////////
// ***first class function
// const foo = function() {
//     console.log("foobar");
//  }
//  foo();

//////////////////////////////
// memoization

// const memoizAddition = () => {
//   let cache = {};
//   return (value) => {
//     if (value in cache) {
//       console.log("Fetching from cache");
//       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//     } else {
//       console.log("Calculating result");
//       let result = value + 20;
//       cache[value] = result;
//       return result;
//     }
//   };
// };
// // returned function from memoizAddition
// const addition = memoizAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached

// https://www.linkedin.com/pulse/pure-impure-functions-asad-khan-axoqc/

