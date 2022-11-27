function countDevelopers(list) {
    let counter = 0;
    for (let item of list) {
      console.log(item)
      if (item.continent === 'Europe' && item.language === 'JavaScript'){
          counter += 1
      }
    }
    return counter;
  }