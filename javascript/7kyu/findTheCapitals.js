var capitals = function (word) {
	// Write your code here
  
  let ar = [];
  for (let letter of word) {
    if (letter.toUpperCase() === letter) {
      ar.push(word.indexOf(letter));
    } 
  }
  
  return ar;
};

console.log(capitals('CodEWaRs'));