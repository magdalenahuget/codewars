function reverseWords(str) {
    // Go for it
    
    let result = str.split(" ");

    result = result.map(word => {

      return word = word.split("").reverse().join("");
    })
    return result;
  }

  console.log(reverseWords('apple'));

  // Refactored version

  function reverseWords(str) {
  
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }