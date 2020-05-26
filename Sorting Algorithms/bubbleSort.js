/**
 * BUBBLE SORT
 * 
 * Pseudo Code
 * Start an outer loop from the end of the arr
 * start a inned loop that check the items from the start of the arr
 * Create a helper function that swaps the items
 * return the sorted array
 */



function bubbleSort(arr) {
let noSwaps;
  for(let i = (arr.length -1); i >= 0; i--){
    noSwaps = true;
    for(let j = 0; j < i; j++){
      // console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]) {
        myLib.swap(arr, j, (j+1));
        noSwaps = false;
      }
    }
    // console.log('Complete Pass');
    if(noSwaps) break;
  }
  return arr;
}



let arr  = myLib.randomArray();
// let arr = [4,1,2,3];
console.log(arr);
let sort1 = bubbleSort(arr);
console.log(sort1);

