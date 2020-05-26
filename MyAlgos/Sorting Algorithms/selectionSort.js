const myLib = require('./myLib');

/**
 * SELECTION SORT
 * 
 */

function selectionSort (arr) {

  let start = 0;
  let smallest = start;

  while(start < arr.length -1) {
    for(let i = start; i < arr.length; i++){
      if(arr[i] < arr[smallest]) {
        smallest = i;
      }
    }
    if (start !== smallest) myLib.swap(arr, start, smallest);
    start++;
    smallest = start;
  }
  return arr;
}

let arr = myLib.randomArray();
console.log(arr);
let sorted1 = selectionSort(arr);
console.log(sorted1);


