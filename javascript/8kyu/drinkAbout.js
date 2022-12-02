function peopleWithAgeDrink(old) {
    console.log(old)
    if (old <= 13) {
        result = "drink toddy";
    }
    else if (14 <= old && old < 18) {
        result = "drink coke";
    }
    else if (17 < old && old < 21) {
        result = "drink beer";
    }
    else if (old >= 21) {
        result = "drink whisky";
    }
    return result;
};

console.log(peopleWithAgeDrink(14))