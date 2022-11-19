let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
function countPositivesSumNegatives(input) {
    let sumPositive = 0;
    let sumNegative = 0;
    let result = [];
    for (let oneIndex of input) {
      if (oneIndex > 0) {
        sumPositive += 1;
      } else if (oneIndex < 0){
        sumNegative += oneIndex;
      } 
      
    }
    result.push(sumPositive)
    result.push(sumNegative)
    return result
  }
  console.log(countPositivesSumNegatives(input))