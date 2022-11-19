function count (string) {  
    if (string === null){
      return {}
    }
    let array = string.split("");
    let resultObject ={};
    for (let character of array){
      if (resultObject[character]){
          resultObject[character] += 1
        } else {
          resultObject[character] = 1
        }
       }
    return resultObject
    }