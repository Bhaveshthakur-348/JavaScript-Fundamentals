// "use strict";

/* Gobal Space 
Point to global or window
*/
// console.log(this)

/* ********************************************************************** */
/* this inside function 
point to window and in case of strict mode return undefined
*/

// function x(){
//     console.log(this);
// }
// x();

/* ********************************************************************** */
/* this inside object method */
// let obj = {
//     a: 10,
//     x: function () {
//         console.log(this);
//     }
// }
// obj.x()

/* ********************************************************************** */
/* call this wrt window by passing refrence :

when we assign a method to a variable and then call that method, 
the context is lost, and this defaults to the global object, which is window in a browser environment
*/
// let obj = {
//     name: "John",
//     age: 23,
//     getFunction: function(){
//         console.log(this);
//     }
// };
// const getRefFunction = obj.getFunction;
// getRefFunction()


/* ********************************************************************** */
// arrow fun

/* arrow function does not have its own this 
they take there value lexical enviornment where enclosed
arrow functions don't provide their own this binding
(it retains the this value of the enclosing lexical context) */

// let obj = {
//   a: 10,
//   x: () => {
//     console.log(this.a);
//   },
// };
// obj.x(); // undefined

// let obj = {
//     a: 10,
//     outer: function () {
//     const inner = () => {
//         console.log(this.a);
//     }
//     inner()
//    }
//   };
// obj.outer(); //a

// let obj = {
//   a: 10,
//   outer: () => {
//     const inner = () => {
//       console.log(this.a);
//     };
//     inner()
//   },
// };

// obj.outer()

/* ********************************************************************** */
/* when this is present inside async method/callback 
regularMethod can lead to unexpected this behavior due to the new execution context created by setTimeout.
arrowMethod always inherits the this value from its surrounding context, ensuring consistency and preventing this binding issues.
*/

// const obj = {
//     value: 42,
//     regularMethod: function (){
//         setTimeout(function(){
//             console.log("Regular method: ", this.value);
//         }, 1000);
//     },

//     arrowMethod: function (){
//         setTimeout(() => {
//             console.log("Arrow method: ", this.value);
//         }, 1000);
//     }
// }

// obj.regularMethod();
// obj.arrowMethod();