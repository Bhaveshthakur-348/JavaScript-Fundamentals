const arr = [1, 3, 4, 1, 4, 1];

let occurence = {};

arr.forEach(item => {
    occurence[item] = (occurence[item] || 0) + 1
})

console.log(occurence);

let maxFrequency = 0;
let mostFrequent;

for(let item in occurence){
    if(occurence[item] > maxFrequency){
        maxFrequency = occurence[item];
        mostFrequent = item
    }
}
console.log(mostFrequent);


/* max and min */
// kth smallest 

/* sliding window */
/* sub array */
/* two sum */

/* fibonacci */
/* palindrome */
/* armstrong */
/* */
/* */
/* */
/* */
/* */
/* */
