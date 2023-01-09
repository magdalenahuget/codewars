function gimme (triplet) {
  
    let sorted = [...triplet].sort((a,b) => a-b);
  
  //   the middle item is sorted[1];
    
    let result = triplet.indexOf(sorted[1])
    
    return result;
    
  }