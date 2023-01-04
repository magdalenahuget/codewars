function titleCase(title, minorWords) {

    if (title.length === 0) {
        return "";
    }

    title = title.toLowerCase();
    title = title[0].toUpperCase() + title.slice(1);
    let splitedTitle = title.split(" ");

    if (minorWords) {

        minorWords = minorWords.toLowerCase();
        let words = minorWords.split(" ");
        console.log(words)

        splitedTitle = splitedTitle.map(element => {
            if (words.includes(element)) {
                element = element[0].toLowerCase() + element.slice(1)
            } else {
                element = element[0].toUpperCase() + element.slice(1)
            }
            return element;
        })
    } else {

        splitedTitle = splitedTitle.map(element => {
            return element = element[0].toUpperCase() + element.slice(1)
        })

    }
    splitedTitle = splitedTitle.join(" ");
    splitedTitle = splitedTitle[0].toUpperCase() + splitedTitle.slice(1);
    return splitedTitle;
}

console.log(titleCase('the quick brown fox'));
