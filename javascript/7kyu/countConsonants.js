function consonantCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let lowerStr = str.toLowerCase().replace(" ", "");
    let counter = 0;
    var lettersRegex = /^[A-Za-z]+$/;

    for (let char of lowerStr) {
        if (!vowels.includes(char) && lettersRegex.test(char)) {
            counter += 1;
        }
    }

    return counter;
}


console.log(consonantCount('hel$#$%%$#Lo world'));