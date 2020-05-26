/**
 * Function that returns a number to the power of another number
 */

 function power(base, exponent) {
  if (exponent === 0 || base === 0) return 0;
  if(exponent === 1) return base;
  return base * power(base, (exponent - 1));
 }

 // Test case

 console.log(power(2,0));
 