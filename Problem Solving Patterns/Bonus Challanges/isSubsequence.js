/**
 * Takes in two strings.
 * checks if the chars in the first string appear in the same order in the second string
 * They dont have to be subsequent, but have to be in the same order.
 */

 function isSubsequence(strSub, str){
  let current = 0;

  for(let i = 0; i < str.length; i++) {
    // if the letters match continue the loop from this point on
    // search for the next letter in the strSub;
    if(strSub[current] === str[i]) {
      if(current === strSub.length -1) {
        console.log('TRUE - Fond SubString');
        return true;
      }
      current++;
    }
  }
  console.log('FALSE - There is no subString');
  return false;
 }

 isSubsequence('hello', 'hello world'); // true
 isSubsequence('sing', 'sting'); // true
 isSubsequence('abc', 'abracadabra'); // true
 isSubsequence('abc', 'acb'); // false
