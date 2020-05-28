/**
 * Helper function: MERGE ARRAYS
 * Create and empty array
 * Look at the smallest values in each input arr
 * (While loops?)
 * While i and j < arr.length compare arr1[i], arr2[j]
 * if we reach the end of one arr, just add the rest o the other array
 */

const myLib = require('./myLib');

function mergeArrays(arr1, arr2) {
  var sorted_arr = []
  var l_pos = 0;
  var r_pos = 0;

  while(l_pos < arr1.length || r_pos < arr2.length) {
    if(l_pos > arr1.length - 1) {
      sorted_arr = sorted_arr.concat(arr2.slice(r_pos));
      return sorted_arr;
    }
    if(r_pos > arr2.length - 1) {
      sorted_arr = sorted_arr.concat(arr1.slice(l_pos));
      return sorted_arr;
    }
    if(arr1[l_pos] < arr2[r_pos]) {
      sorted_arr.push(arr1[l_pos]);
      l_pos++;
    } else {
      sorted_arr.push(arr2[r_pos]);
      r_pos++;
    }
  }
  
  return sorted_arr;
}

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  return mergeArrays(
    mergeSort(arr.slice(0, arr.length /2)) , 
    mergeSort(arr.slice(arr.length /2))
  );
}

// let arr = [2,1];
// let arr = []; 
let arr = myLib.randomArray();
console.log(arr);
let a = mergeSort(arr);
console.log(a);
