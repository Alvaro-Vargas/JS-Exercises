/**
 * a function that returns the factorial of a number
 */

function factorial(num) {
  if(num === 0) return 1;
  if(num === 1) return 1;
  return num * factorial(num-1);
}


// Test case
console.log(factorial(3));
