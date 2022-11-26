function points(games) {
    let array = [];
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum = 0;
    for (let game of games){
      if (game[0] > game[2]){
        sum1 +=3
      } else if (game[0] < game[2]){
        sum1 += 0
      } else if (game[0] = game[2]){
        sum1 += 1
      }
    }
 return sum = sum1 + sum2 + sum3;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));