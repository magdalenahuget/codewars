function getCount(str) {
  
    let counter = 0;
    let vovel = ["a", "e", "i", "o", "u"];
    
    for (let char of str) {
      if (vovel.includes(char)) {
        counter += 1
      }
    }
    return counter;
  }