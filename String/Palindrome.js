function isPalindrome(str){
    data = str.split("").reverse().join("")
    if(str === data){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome("AMAN"));