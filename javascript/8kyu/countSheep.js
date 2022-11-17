var countSheep = function (num) {
    let message = "";
    for (let i = 0; i < num; i++) {
        message = message + ((i + 1) + " sheep...")
    }
    return message;
}

console.log(countSheep(1))