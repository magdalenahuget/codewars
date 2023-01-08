function solution(str, ending){
    let endingLength = ending.length;
    let strPart = str.substring(str.length - ending.length);
    return (ending === strPart ? true: false);
 }