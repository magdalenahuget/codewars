function findUniq(arr) {
    let obj = {};
    let unique = 0;
    for(let item of arr) {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
    }
    console.log(obj)
    for (let [key, value] of Object.entries(obj)) {
        if (value === 1) {
            unique = Number(key);
        }
    }
    return unique;
}


console.log(findUniq([3, 10, 3, 3, 3]));