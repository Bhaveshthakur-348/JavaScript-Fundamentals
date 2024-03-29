const arr = [22, 44, 66, 55, 11, 33]
let temp = 0;
const newArr = arr.map((item) => {
   
    if(item > temp){
        temp = item
        item ++;
    }else{
        return temp
    }
    console.log(temp)
})

console.log(newArr);

// Hr Executive , Hiring Software developer
// Hiring for the React developer
// Human Resources Executive
// Actively hiring for frontend developers
// actively hiring for react developers
