function findOdd(A) {
    let obj = {};
    let odd = 0;
    let key = "";
    for (i = 0; i < A.length; i++) {
        key = A[i];
        if (!obj[key]) {
            obj[key] = 1;
        } else {
            obj[key] += 1;
        }
    }
    for (let [key, value] of Object.entries(obj)){
        if ( value % 2 != 0){
            odd = parseInt(key);
        }
    }
    return odd;
}


console.log(findOdd([1, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))