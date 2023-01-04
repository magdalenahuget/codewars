function arrayDiff(a, b) {
    for (let j = 0; j < a.length; j++) {
      for (let i = 0; i < b.length; i++) {
        if (a[j] == b[i]) {
          delete a[j];
        }
      }
    }
    let result = a.filter(Boolean)
    return result;
  }


  // Jak usunąć 'undefined' z naszego array ===>>>> array.filter(Boolean)


  // version 2 - working better
  function arrayDiff(a, b) {  
    if (b.length == 0 || a.length == 0) {
      return a;
    }
  for (var j = 0; j < a.length; j++) {
    for (var i = 0; i < b.length; i++) {
      if(a[j] == b[i]) {
        a.splice(j, 1);
        j--;
        }
      }
    }
    return a;
  }