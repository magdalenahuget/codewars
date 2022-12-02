function monkeyCount(n) {
    let array = [];
    let i = 1;
    do {
        array.push(i)
        i++
    } while (i <= n)
    return array;
}