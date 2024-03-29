function canBeFormed(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const freqMap1 = {};
    const freqMap2 = {};

    // Populate frequency map for str1
    for (const char of str1) {
        freqMap1[char] = (freqMap1[char] || 0) + 1;
    }

    // Populate frequency map for str2
    for (const char of str2) {
        freqMap2[char] = (freqMap2[char] || 0) + 1;
    }

    for (const key in freqMap1) {
        if (freqMap1[key] !== freqMap2[key]) {
            return false;
        }
    }
    return true;

}

// Test cases
console.log(canBeFormed("listen", "silent")); // true
console.log(canBeFormed("hello", "world")); // false
console.log(canBeFormed("hello", "ollhe")); // true
console.log(canBeFormed("abc", "abcd")); // false