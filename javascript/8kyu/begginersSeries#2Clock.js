function past(h, m, s){
    let hNew = h * 60 * 60 * 1000;
    let mNew = m * 60 * 1000;
    let sNew = s * 1000;
    return hNew + mNew + sNew;
  }