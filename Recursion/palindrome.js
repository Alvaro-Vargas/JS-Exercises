/**
 * Receives a string and returns if it is a palindrome
 * (Reads the same forward and backward)
 */

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  if(str.length <= 2) {
    return true;
  }
  
  return palindrome(str.slice(1, str.length-1));
}

// test cases
console.log(isPalindrome('anzana'));
console.log(isPalindrome('ovo'));

