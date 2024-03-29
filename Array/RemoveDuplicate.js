// const arr = [1, 3, 5, 3, 2, 4];

// arr.sort();

// let temp;

// const modifiedArr = [];

// for(i = 0; i < arr.length; i++){
//     if(arr[i] != temp){
//         modifiedArr.push(arr[i]);
//         temp = arr[i];
//     }
// }

// console.log(modifiedArr)

const arr = [1, 3, 5, 3, 2, 4];

arr.sort();

let modifiedArr = [];
let temp;

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== temp){
        modifiedArr.push(arr[i])
        temp = arr[i]
    }
};
console.log(modifiedArr)

// const uniqueSet = new Set();
// const modifiedArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueSet.has(arr[i])) {
//         modifiedArr.push(arr[i]);
//         uniqueSet.add(arr[i]);
//     }
// }

// console.log(modifiedArr);

