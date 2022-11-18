function abbrevName(name){
    let afterSplit = name.split(" ");
    let afterSlice = "";
    let array = [];
    for (i = 0; i < afterSplit.length; i++) {
        array.push(afterSplit[i].slice(0,1));
      }
      return (array.join(".")).toUpperCase();
  }

  console.log(abbrevName("Jan Kowalski"))