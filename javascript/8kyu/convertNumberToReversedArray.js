function digitize(n) {
    let nToString = n.toString();
    let x = nToString.split("").reverse();
    let xyz = [];
    for (let item of x){
      xyz.push(parseInt(item))
    }
    return xyz
  }