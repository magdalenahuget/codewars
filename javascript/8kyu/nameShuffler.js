function nameShuffler(str){
    let arr = [];
    let aRR = [];
    arr = str.split(" ");
    aRR.push(arr[1]);
    aRR.push(arr[0]);
    return aRR.join(" ");
  }