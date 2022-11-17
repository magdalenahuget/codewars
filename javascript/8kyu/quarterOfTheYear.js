const quarterOf = (month) => {
    let quarter = 0
    if (month <= 3) {
        quarter = 1;
    }
    else if (month <= 6) {
        quarter = 2;
    }
    else if (month <= 9) {
        quarter = 3;
    }
    else if (month <= 12) {
        quarter = 4;
    }
    else {
        console.log('month is not valid')
    }

    return quarter
}

console.log(quarterOf(4));