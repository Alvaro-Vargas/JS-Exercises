/**
 * PSEUDO CODE
 * accepts a sorted array and value
 * left and right pointers
 * Loop until find, or while lefy < right
 * 
 * This algorithm should be more efficient than linearSearch 
 * https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
 * https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 */

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length -1;
  let middle;

  while(left <= right) {
    middle = Math.floor((right + left) / 2);
    if (arr[middle] === value) {
      return middle;
    } if(arr[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
 }

 // Test Cases

 let nums = [1,2,3,4,5,10,13,25,32];
 let names = ['Apple','Banana','Mango','Orange']

console.log(binarySearch(names, 'Banana'));
console.log(binarySearch(names, 'Test'));
console.log(binarySearch(nums, 3));
console.log(binarySearch(nums, 32));


 