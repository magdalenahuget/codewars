function howMuchILoveYou(nbPetals) {
    let result = "";
    for (let i = 0; i < nbPetals; i++) {
        if (nbPetals === 7) {
            result = "I love you"
        }
        if (nbPetals === 2) {
            result = "a little"
        }
        if (nbPetals === 3) {
            result = "a lot"
        }
        if (nbPetals === 4) {
            result = "passionately"
        }
        if (nbPetals === 5) {
            result = "madly"
        }
        if (nbPetals === 6) {
            result = "not at all"
        }
    }
    return result;
}

// second version

function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i <= nbPetals; i++){
    arr.push(arr[i]);
    }
    return arr[nbPetals-1];
   }