function doubleChar(str) {
    let arr = [];
    let result = "";
    for (let i = 0; i <= str.length; i++) {
        arr.push(str[i]);
        arr.push(str[i]);
    }
    result = arr.join("");
    return result;
}