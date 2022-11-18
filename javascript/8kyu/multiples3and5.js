function solution(number) {
    if (number < 0) {
      return 0;
    }
    let sum = 0;
    let sumPartial1 = 0;
    let sumPartial2 = 0;
    for (let i = 0; i < number; i++) {
       if (i % 5 === 0){
         sumPartial1 += i;
        } else if(i % 3 === 0) {
         sumPartial2 += i;  
        }
    }
      return sum = sumPartial1 + sumPartial2
  }
  console.log(solution(25));