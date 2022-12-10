function findAverage(array) {
    let average = 0;
    let sum = 0;
    if (array.length > 0) {
        for (let char of array) {
            sum += char;
        }
    } else {
        return 0;
    }
    average = sum / array.length;
    return average;
}

console.log(findAverage([]))