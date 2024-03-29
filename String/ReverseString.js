
function ReverseString(str){
    let res = ""
    for(let i=str.length-1; i>=0; i--){
        res += str[i]
    }
    console.log(res)
}


ReverseString("Bhavesh")