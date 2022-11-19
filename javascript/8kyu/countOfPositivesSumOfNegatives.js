function countPositivesSumNegatives(input) {
    let sumPositive = 0;
    let sumNegative = 0;
    let result = [];
    if (!input || input.length === 0) {
        return result;
    }
    for (let oneIndex of input) {
        if (oneIndex > 0) {
            sumPositive += 1;
        } else if (oneIndex < 0) {
            sumNegative += oneIndex;
        }

    }
    result.push(sumPositive)
    result.push(sumNegative)
    return result
}