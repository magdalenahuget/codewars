function index(array, n) {
    let result = 0;
    let npow = 0;
      if (n <= array.length){
          npow = Math.pow(array[n], n);
          result = npow;
        } else {
          result = -1
        }
    return result;
}

console.log(index([1,2,3], 2))