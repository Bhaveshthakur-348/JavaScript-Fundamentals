const str = "Ju23st te5ll me6 3the ti45me f567or bu7s;";
let result = '';

for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (!isNaN(char)) { 
        result += char;
    }
}

let data = result.split(" ")

const arr = data.map((item) => parseInt(item));

const newArr = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(newArr);