# JavaScript-Fundamentals

## Promise Methods()

### Promise.all()
Takes an array of promises and returns a single promise. This new promise will be fulfilled with an array of the resolved values of the input promises, in the same order as the input array.
Wait all of them to finish
If any promise in the array is rejected Immediately asap error happend , it will not wait for other promise.

### Promise.allSettled()
Return a new promise is fulfilled with an array of objects, each representing the outcome of the corresponding promise in the input array, whether it was fulfilled or rejected.

Output:
      [
        { status: 'fulfilled', value: 'P1 Success' },
        { status: 'rejected', reason: 'P2 failed' },
        { status: 'fulfilled', value: 'P3 Success' }
      ]

### Promise.race()
It takes an array of promises and returns a result of first settled promise (either fulfilled or rejected) as soon as any of the input 
promises is settled. 

### Promise.any()
It takes an array of promises and wait for first success promise.
If all the promises are rejected then return Aggregate Error(list of all errors [err1, err2, err2])

## Async Await

### 1. what is async ?
Async is a keyword that is used before a function to create a function

### 2. what is async function ?
async function getData(){}

### 3. How it is different than normal function ?
async function always returns a Promise
If you don't return a promise from it, and if you write a value, this function will automatically wrap this value in a promise and return a promise.
Example with value.

async function getData(){
    return "Hello";
}

const data = getData();
console.log(data)

o/p:
Promise {<fulfilled>: 'Hello'}

### 4. Why we using await with async ?
async and await combo is use to handle Promise.

### 5. What is await?
await is a keyword that can only be used inside an async function.
and write this await keyword in front of the promise, and it will resolve the promise.

### 6. How do we use promise before async await?
const P = new Promise((resolve, reject) => {
    resolve("Promise resolved value")
})

function getData(){
    P.then(res => console.log(res))
}
getData()

### 7. After async await ?
const P = new Promise((resolve, reject) => {
    resolve("Promise resolved value")
})

async function getData(){
    const data = await P;
    console.log(data)
}
getData()

## Diving deep into async await and Promise

### Difference b/w async await vs promise ?

Promise:

const P = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 5000);
});

function getData() {
  P.then((res) => console.log(res));
  console.log("Hello JS");
}
getData();

This function uses the P promise and attaches a .then handler to it. The .then handler will be executed once the promise P is resolved.
However, the console.log("Hello JS") statement is not inside the .then handler, so it gets executed immediately after calling P.then().
The output will be "Hello JS" first, and after 5 seconds (when P is resolved), "P1 Success" will be logged.


async/await:

const P = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 5000);
});

async function handlePromise() {
  const val = await P;
  console.log(val);
  console.log("Hello JS");
}
handlePromise();

The await P statement pauses the execution of the function until the promise P is resolved. The result of the resolved promise is assigned to val.
The console.log(val) and console.log("Hello JS") statements are inside the handlePromise function and will be executed in order after the promise is resolved.


### Tricky Examples

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 10000);
});
const P2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 5000);
});

async function handlePromise() {
  console.log("Hello Promise");

  const val1 = await P1;
  console.log(val1);

  const val2 = await P2;
  console.log(val2);
}
handlePromise();

o/p:
Hello Promise
after 10sec 
P1 success 
P2 Success


const P1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 10000);
});
const P2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 5000);
});

function handlePromise() {
  console.log("Hello Promise");

  P1.then(res => console.log(res));
  P2.then(res => console.log(res));

}
handlePromise();

o/p: 
Hello Promise
after 5sec 
P2 Success
after 10sec 
P1 success 


### Github api call with async await

const API_URL = "https://api.github.com/users/Bhaveshthakur-348";

const GithubData = async() => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
}

GithubData();

### Error handling

const API_URL = "https://api.github.com/users/Bhaveshthakur-348";

const GithubData = async() => {
    try{
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json);
    }
    catch(err){
        console.log(err)
    }
}

GithubData();
