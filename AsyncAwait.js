/* */

// what is async ?

// Async is a keyword that is used before a function to create a function

// what is async function ?

// async function getData(){}

// How it is different than normal function ?

// async function always returns a Promise
// If you don't return a promise from it, and if you write a value, this function will automatically wrap this value in a promise and return a promise.
// Example with value

// async function getData(){
//     return "Hello";
// }

// const data = getData();
// console.log(data)

// o/p:
// Promise {<fulfilled>: 'Hello'}

// how do we use promise before async await?
// const P = new Promise((resolve, reject) => {
//     resolve("Promise resolved value")
// })

// function getData(){
//     P.then(res => console.log(res))
// }
// getData()

// why we using await with async ?
// async and await combo is use to handle Promise.

// what is await?
// await is a keyword that can only be used inside an async function.
// and write this await keyword in front of the promise, and it will resolve the promise.

// After async await
// const P = new Promise((resolve, reject) => {
//     resolve("Promise resolved value")
// })

// async function getData(){
//     const data = await P;
//     console.log(data)
// }
// getData()

// Diving deep into async await

// Difference b/w async await vs promise
// const P = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 5000);
// });

// function getData() {
//   P.then((res) => console.log(res));
//   console.log("Hello JS");
// }
// getData();
// This function uses the P promise and attaches a .then handler to it. The .then handler will be executed once the promise P is resolved.
// However, the console.log("Hello JS") statement is not inside the .then handler, so it gets executed immediately after calling P.then().
// The output will be "Hello JS" first, and after 5 seconds (when P is resolved), "P1 Success" will be logged.

// const P = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Success"), 5000);
// });

// async function handlePromise() {
//   const val = await P;
//   console.log(val);
//   console.log("Hello JS");
// }
// handlePromise();

// The await P statement pauses the execution of the function until the promise P is resolved. The result of the resolved promise is assigned to val.
// The console.log(val) and console.log("Hello JS") statements are inside the handlePromise function and will be executed in order after the promise is resolved.

// Tricky que
// const P1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 10000);
// });
// const P2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 5000);
// });

// async function handlePromise() {
//   console.log("Hello Promise");

//   const val1 = await P1;
//   console.log(val1);

//   const val2 = await P2;
//   console.log(val2);
// }
// handlePromise();

// o/p:
// Hello Promise
// after 10sec 
// P1 success 
// P2 Success


// const P1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Success"), 10000);
// });
// const P2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Success"), 5000);
// });

// function handlePromise() {
//   console.log("Hello Promise");

//   P1.then(res => console.log(res));
//   P2.then(res => console.log(res));

// }
// handlePromise();

// o/p: 
// Hello Promise
// after 5sec 
// P2 Success
// after 10sec 
// P1 success 

// API Call with async await 
// const API_URL = "https://api.github.com/users/Bhaveshthakur-348";

// const GithubData = async() => {
//     try{
//         const data = await fetch(API_URL);
//         const json = await data.json();
//         console.log(json);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// GithubData();