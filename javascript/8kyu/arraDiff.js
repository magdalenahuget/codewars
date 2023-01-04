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