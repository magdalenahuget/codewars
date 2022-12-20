var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    let dogYears1 = 15;
    let dogYears2 = 9;
    let catYears1 = 15;
    let catYears2 = 9;
    let currentYear = 2022;
    let birthYear = currentYear - humanYears;
    
    
      if (humanYears === 1){
        dogYears = dogYears1;
  
      } else if (humanYears === 2){
        dogYears = dogYears1 + dogYears2;
      } else if (humanYears > 2){
        dogYears = dogYears1 + dogYears2 + ((humanYears - 2) * 5);
      }   
    
     if (humanYears === 1){
        catYears = catYears1;
      } else if (humanYears === 2){
        catYears = catYears1 + catYears2;
      } else if (humanYears > 2){
        catYears = catYears1 + catYears2 + ((humanYears - 2) * 4);         
    }
    return [humanYears,catYears,dogYears];
  }
  