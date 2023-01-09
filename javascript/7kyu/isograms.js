function isIsogram(str) {


    let low = str.toLowerCase()

    for (let i = 0; i < low.length; i++) {
        for (let j = i + 1; j < low.length; j++) {

            //  j = i + 1 !


            if (low[i] === low[j]) {
                return false;
            }
        }
    }
    return true;
}