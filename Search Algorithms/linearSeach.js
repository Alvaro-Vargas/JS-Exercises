/**
 * PSEUDO CODE
 * function accepts an array and a value
 * loop through the array and check if the current value is equal to value
 * return the index
 * if the value is never found, return -1
 */

 function linearSearch(arr, value) {
   for(let i = 0; i < arr.length; i++){
     if(arr[i] === value) {
       return i;
     }
   }
   return -1;
 }

 // test cases
let numbers = [10,1,2,3,4,5,6];
let countries = ['Brasil', 'Canada'];

console.log(linearSearch(numbers, 10));
console.log(linearSearch(countries, 'Canada'));

/**
 * Time Complexity: O(n) -> You will need to loop through the arr
 * Space Complexity: O(1) -> We just iterate through the array
 */



 