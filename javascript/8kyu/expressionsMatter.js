// function expressionMatter(a, b, c) {

//     if ( a === 1 && b ===1 && c === 1){
//         return 3;
//     }

//     let operation1 = 0;
//     let operation2 = 0;
//     let operation3 = 0;
//     let operation4 = 0;
//     let operation5 = 0;
//     let array = [];
//   //     console.log(a)
//   //     console.log(b)
//   //     console.log(b)
//     operation1 = a * ( b + c);
//     array.push(operation1);
//     operation2 = a + ( b * c);
//     array.push(operation2);
//     operation3 = (a * b) + c;
//     array.push(operation3);
//     operation4 = (a + b) * c;
//     array.push(operation4);
//     operation5 = a * b * c;
//     array.push(operation5);
//     let highest = array[0];
//     console.log(array)
//     for (let oper of array){
//       if (highest< oper){
//         highest = oper;
//       }
//     }
//     return highest;
//   }

//   console.log(expressionMatter(1, 3, 1));


// working version

function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }