function solution(a, b) {
    let array = [];
    if (a.length < b.length) {
        array.push(a);
        array.push(b);
        array.push(a);
    }
    if (b.length < a.length) {
        array.push(b);
        array.push(a);
        array.push(b);
    }
    return array.join("");
}