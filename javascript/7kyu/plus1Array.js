function upArray(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9) {
            return null;
        }
        if (arr[i] > 0) {
            arr[arr.length - 1] += 1;
            if (arr[arr.length - 1] === 10) {
                arr[arr.length - 1] = 0;
                arr[arr.length - 2] += 1
            } if (arr[arr.length - 2] === 10) {
                arr[arr.length - 2] = 9;
            }
        }
    }
    return arr;
}