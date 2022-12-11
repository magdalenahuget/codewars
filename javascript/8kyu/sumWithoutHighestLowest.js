function sumArray(array) {
    let result = 0;
 
    if (!array || array.length < 3) {
      return result;
    } else {
      console.log(array)
        for (let item of array) {
        console.log(item)
        result += item;
      }
    }
    let minimum = Math.min(...array);
    let maksymal = Math.max(...array);
    result = result - minimum - maksymal;
    return result;
  }

  console.log(sumArray([6, 2, 1, 8, 10]))