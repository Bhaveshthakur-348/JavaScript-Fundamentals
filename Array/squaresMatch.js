function squaresMatch(arr1, arr2) {
    if(arr1.length !== arr2.length) return false

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] * arr1[i] !== arr2[i]){
            return false
        }        
    }

    return true
    
}

console.log(squaresMatch([1, 2, 3], [1, 4, 9])); // true
console.log(squaresMatch([1, 2, 2, 3], [1, 4, 4, 9])); // true
console.log(squaresMatch([1, 2, 3], [1, 4])); // false (mismatched lengths)
console.log(squaresMatch([1, 2, 2, 3], [1, 4, 9])); // false (frequency mismatch)
