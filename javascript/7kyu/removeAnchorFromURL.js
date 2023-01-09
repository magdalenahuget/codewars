function removeUrlAnchor(url) {


    if (url.includes("#")) {
        let stop = url.indexOf("#");
        url = url.substring(0, stop);
        return url;

    } else {
        return url;
    }
}

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))