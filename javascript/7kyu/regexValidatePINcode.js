// not working


function validatePIN (pin) {
  
    let digits = [1,2,3,4,5,6,7,8,9,0];
    let okLength = [4,6];
    
   if ( digits.includes(pin) && okLength.includes(pin.length) && !isNaN(pin)) {
       return true;
       } else {
     return false;
    }
  }
  
  console.log(validatePIN(1234));
  
  // working version 

  function validatePIN (pin) {
      if (pin.length !== 4 && pin.length !== 6) {
      return false;
    }
    for (let i = 0; i < pin.length; i++) {
      if (pin[i] > '9' || pin[i] < '0') {
         return false;
      }
  
    }
    return true;
  }