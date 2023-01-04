function minMax(arr){
  
    let elMin = arr[0];
    let elMax = arr[0];
    let newArr = [];
    
    for (let el of arr){
      if (el < elMin){
        elMin = el;
      }
      if (el > elMax){
        elMax = el;
      }
    }
  
    newArr.push(elMin);
    newArr.push(elMax);
    return newArr;
  }