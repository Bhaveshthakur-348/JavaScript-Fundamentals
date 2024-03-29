// const arr = ['a', 'b', 'c'];
// const obj = {};

// arr.forEach((element, index) => {
//     obj[element] = index;
// });

// console.log(obj);

// const obj = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
//   };
  
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
  
// console.log(keys); // ["key1", "key2", "key3"]
// console.log(values); // ["value1", "value2", "value3"]

  
const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};
  
const arr = Object.entries(obj);
  
console.log(arr);