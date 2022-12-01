function arrayPlusArray(arr1, arr2) {
    let count = 0;
    for(let i = 0; i < arr1.length; i++)
    {
      count = count + arr1[i];
    }
      for(let i = 0; i < arr2.length; i++)
    {
      count = count + arr2[i];
    }
    return count;
  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));