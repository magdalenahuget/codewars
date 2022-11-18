let text = '8 j 8 k  mBliB8g  ikmjB8B8  kjl  B 8j8mBlkiB8gimjB8B8jlB';

function noSpace(x){

    let xSplitted = x.split(' ');
    console.log(xSplitted);
    
    let xArrayJoined = xSplitted.join('');
    console.log(xArrayJoined);
    
    return xArrayJoined;
  }

noSpace(text);