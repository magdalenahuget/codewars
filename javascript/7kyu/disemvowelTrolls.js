function disemvowel(str) {

    let vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let nS = "";
    for (let i = 0; i < str.length; i++) {

        if (vovels.includes(str[i])) {
            nS += "";
        } else {
            nS += str[i];
        }
    }

    return nS;
}