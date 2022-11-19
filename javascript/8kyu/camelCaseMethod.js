let string = "Siemano kocury Bambury"

String.prototype.camelCase=function(){
    let splitString = this.split(" ");
    let wordSplited = [];
    let words = [];
    for (let i = 0; i < splitString.length; i++) {
        wordSplited = splitString[i].split("")
      if (splitString[i].length > 0) {
        wordSplited[0] = wordSplited[0].toUpperCase();
        words.push(wordSplited);
      }
    }
    for (let j=0; j<words.length; j++){
        words[j] = words[j].join("");
    }
    words = words.join("");
    // console.log(words)
    return words
}

console.log(string.camelCase());
