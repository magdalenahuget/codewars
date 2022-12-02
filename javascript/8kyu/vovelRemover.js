function shortcut(string) {
    let result = "";
    let arr = [];
    let ARR = [];
    arr = string.split("");
    let vovel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < arr.length; i++) {
        if (!vovel.includes(arr[i])) {
            ARR.push(arr[i])
        }
    }
    console.log(ARR);
    result = ARR.join("");
    return result;
}

console.log(shortcut("Hello"))