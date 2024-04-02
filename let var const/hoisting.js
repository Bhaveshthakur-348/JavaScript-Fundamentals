/* Hoisting */
// variable and fun declration are moved to the top of their scope before code excution

// variables;
// console.log(me);
// console.log(job);
// console.log(year);

// var me = "bhavesh";
// let job = "student";
// const year = 2000;

// console.log(addDeclr(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDeclr(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const myname = "Bhavesh";
// if (myname === "Bhavesh") {
//   console.log(`Bhavesh is a ${job}`); //TDZ for job variable

//   const age = 20;
//   console.log(age);

//   const job = "student";
// }

/**********************************************************************/

/* MCQ */

// Quetion: 1
// var a = 10;
// function add() {
//   console.log(a);
//   var a = 20;
//   console.log(a);
// }
// add();

// // Quetion: 2
// console.log(Numbers);
// var Numbers = 10;
// console.log(Numbers);
// function fn() {
//   console.log(Numbers);
//   var Numbers = 20;
//   console.log(Numbers);
// }
// fn();

// Question: 3
// console.log(Numbers);
// var Numbers = 10;
// function a() {
//   console.log(Numbers);
// }
// a();
// console.log(Numbers);
// function b() {
//   console.log(Numbers);
//   var Numbers = 20;
//   console.log(Numbers);
// }
// b();

// Question: 4
// console.log(Numbers); 
// var Numbers = 10;
// function a() {
//   console.log(Numbers);
// }
// console.log(Numbers);
// function b() {
//   console.log(Numbers);
//   var Numbers = 20;
//   a();
//   console.log(Numbers);
// }
// b();

// // Question: 5
// console.log(Numbers);
// var Numbers; //declare

// Numbers = 10; //assign
// console.log(Numbers);

// Numbers = 20; //reassign
// console.log(Numbers);

// var Numbers;
// console.log(Numbers);

// // Question: 6
// function fn() {
//   console.log(a);
//   var a = 10;
//   console.log(a);

//   if (a == 10) {
//     // (10 == 10)
//     var a;
//     console.log(a);
//     var a = 20;
//   }
//   console.log(a);
// }
// fn();

// // Question: 7
// var a = 10;
// console.log(a); //10
// function fn() {
//   console.log(a); //uf
//   var a = 20;
//   a++;
//   console.log(a); //21
//   if (a) {
//     var a = 30;
//     a++;
//     console.log(a); //31
//   }
//   console.log(a); //31
// }
// fn();
// console.log(a); //10

///////////////////////////////////
////// let and const /////////////

// Quetion: 1
// let a = 10;
// function add() {
//   console.log(a); // ref err
//   let a = 20;
//   console.log(a); //20
// }
// add();

// // Quetion: 2
// console.log(Numbers); //uf
// var Numbers = 10;
// console.log(Numbers); //10
// function fn() {
//   console.log(Numbers); //Ref error cannot access Num before initialize
//   let Numbers = 20;
//   console.log(Numbers);
// }
// fn();

// Question: 3
// console.log("Let is Started");
// let Numbers; //declare
// Numbers = 10; //assign
// console.log(Numbers);

// Numbers = 20; //reassign
// console.log(Numbers);

// let Numbers = 22; // error because let already dec
// console.log(Numbers);

// Question: 4
// console.log("Let is Started");
// var Numbers; //declare
// Numbers = 10; //assign
// console.log(Numbers);

// Numbers = 20; //reassign
// console.log(Numbers);

// var Numbers = 22;
// console.log(Numbers);