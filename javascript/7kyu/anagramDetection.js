// write the function isAnagram
var isAnagram = function (test, original) {

    let test1 = test.toLowerCase().split("").sort().join("");
    let original1 = original.toLowerCase().split("").sort().join("");

    console.log(test1)
    console.log(original1)

    return (test1 === original1) ? true : false;
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("apple", "pale"));
