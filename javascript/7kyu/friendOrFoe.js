function friend(friends){
  
    let arr = [];
    friends.forEach((friend) => {
      if (friend.length === 4) {
        arr.push(friend);
      }
    })
    return arr;
  }