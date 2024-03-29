
function LongestWord(sentence){
    let wordsArray = sentence.split(" ");
    let longestWord = "";

    console.log(wordsArray)

    for(let i=0; i < wordsArray.length; i++){
        if(wordsArray[i].length > longestWord.length){
            longestWord = wordsArray[i];
        }
    }
    console.log(longestWord);

}

LongestWord("Hi I am BhaveshThakur and UI Developer")