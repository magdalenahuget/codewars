function getMiddle(s)
{
  //Code goes here!
  console.log(s)
  
  let sLong = s.length;
  let result = '';
  
  if ( sLong % 2 === 0 ) {
    result = s.substring((sLong/2)-1, (sLong/2)+1);
  } else {
    result = s[Math.floor(sLong/2)];
  }
   return result;  
}