function squareDigits(num) {
    let numInString = num.toString();
    let array = [];
    let characterInInt = 0;
    let newValueCharacter = 0;
    let newValueCharacterInString = "";
    for (let character of numInString) {
        // charater to int
        characterInInt = parseInt(character);
        //character do potegi zamieniony na int
        newValueCharacter = Math.pow(characterInInt, 2);
        // character do potegi zamieniony na int zamieniam na string
        newValueCharacterInString = newValueCharacter.toString();
        // -||- wkladam do tabeli,
        array.push(newValueCharacterInString)
        console.log(array)
    }
    // zamieniam tabele na string
    return parseInt(array.join(''));
}
console.log(squareDigits(3212));