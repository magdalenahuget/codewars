function highAndLow(numbers){
  
    let separated = numbers.split(" ");
    let lowest = Math.min(...separated)
    let higest = Math.max(...separated)
    console.log(lowest)
    console.log(higest)
    
    return `${higest} ${lowest}`;
  }