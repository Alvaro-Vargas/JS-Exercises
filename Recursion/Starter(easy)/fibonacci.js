/**
 * Returns the Nth number in the Fibonacci sequence.
 * Fibonacci is the sequence of whole numbers.
 * Starts with 1 and 1, and every number thereafter is equal to the sum of the
 * previous two numbers
 */

 function fib(num){
  if(num === 1) return 1;
  if(num === 0) return 0;
  return fib(num-1) + fib(num-2);
 }

// test cases
console.log(fib(3));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
