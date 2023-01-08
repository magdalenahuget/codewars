function descendingOrder(n) {


    let splited = n.toString().split("");
    let sorted = splited.sort().reverse();
    let result = Number(sorted.join(""));


    return result;
}

console.log(descendingOrder(582189))
