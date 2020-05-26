/**
 * Returns the product of a given array
 */

 function productOfArray(arr){
   if(arr.length === 0) return 1;
   return arr[0] * productOfArray(arr.slice(1));
 }

 // test cases
console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60