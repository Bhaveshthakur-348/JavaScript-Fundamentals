/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// function twoSum(nums, target) {
//     // Create an array of [number, index] pairs
//     const numsWithIndices = nums.map((num, index) => [num, index]);

//     // Sort the array based on the numbers
//     numsWithIndices.sort((a, b) => a[0] - b[0]);

//     // Initialize two pointers at the beginning and end of the sorted array
//     let left = 0;
//     let right = numsWithIndices.length - 1;

//     while (left < right) {
//         const currentSum = numsWithIndices[left][0] + numsWithIndices[right][0];

//         if (currentSum === target) {
//             // Found the pair that adds up to the target
//             return [numsWithIndices[left][1], numsWithIndices[right][1]];
//         } else if (currentSum < target) {
//             // Move the left pointer to increase the sum
//             left++;
//         } else {
//             // Move the right pointer to decrease the sum
//             right--;
//         }
//     }

//     // No such pair found
//     return [];
// }

const nums = [2, 4, 11, 16];
const target = 15;
// const result = twoSum(nums, target);

console.log(twoSum(nums, target)); // Output: [0, 1]

function twoSum(nums, target){
    for(let data of nums){
        var difference = target - data;
        if(nums.includes(difference) && difference !== data ){
            return [data, difference]
        }
    }
    return null;
}