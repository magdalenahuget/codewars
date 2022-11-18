function countSheeps(arrayOfSheep) {
    let sum = 0;
    for (let item of arrayOfSheep) {
      if (item === true) {
        sum += 1
      }
    }
    return sum;
  }