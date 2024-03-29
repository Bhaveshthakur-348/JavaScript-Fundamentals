const nestedArray = [1, 2, [3, 4, [5, 6]], 7];

// function flatten(arr) {
//   return arr.reduce(
//     (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
//     []
//   );
// }

let modifiedArr = []

function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          flatten(arr[i]);
      } else {
          modifiedArr.push(arr[i]);
      }
  }
  return modifiedArr
}

console.log(flatten(nestedArray));
