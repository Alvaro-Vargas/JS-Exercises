/**
 * Adds up the numbers from 0 to the number passed in the function
 */

 function recursiveRange(num) {
  if(num === 0) return 0;
  return num + recursiveRange(num-1);
 }

 // test cases

 console.log(recursiveRange(6));
 console.log(recursiveRange(10));
 