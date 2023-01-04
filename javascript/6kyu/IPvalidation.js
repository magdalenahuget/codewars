function isValidIP(str) {
    if (str[0] === " " || str[0] === "\n") {
        return false;  
    } 
    let splitedStr = str.split(".");

    if (str.length === 0) {
        return false;
    }
    if (splitedStr.length != 4) {
        return false;
    }
    for (let element of splitedStr) {
        if (element.length < 1) {
            return false;
        }
        if (element.length > 1 && element[0] === "0") {
            return false;
        }
        if (element < 0 || element > 255) {
            return false;
        }
        for (let ch of element) {
            element = parseInt(ch);
            console.log(element)
            if (Number.isNaN(element)) {
                return false;
            }
        }
    }
    return true;
}



console.log(isValidIP("165.a.44.32"));