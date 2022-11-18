// solution 1

function squareSum(numbers){
    let sum = 0;
    for( let item of numbers){
      item = Math.pow(item,2);
      sum += item
    }
    return sum;
  }

  // solution 2

  function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }