
// solution 1 
function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(checkNeedle)}`
}

function checkNeedle(thing) {
    return thing === "needle"
}


// solution 2
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`
        }
    }
}

// solution 3
function findNeedle(haystack) {
    let index = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            index = i;
        }
    }
    return `found the needle at position ${index}`
}
