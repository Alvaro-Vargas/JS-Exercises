/**
 * PSEUDO CODE
 * Pick the second element in the array
 * Compare the second with the one before. Swap if necessary
 * Go to the next element and compare to the sorted portion to place in the correct place.
 */

const myLib = require('./myLib');

function insertionSort(arr) {
  for( var i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(var j = i - 1; j >=0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  } 
  return arr
}

// Test Cases

let arr = [2,3,1,5];

insertionSort(arr);
console.log(arr);
