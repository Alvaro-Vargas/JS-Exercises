/**
 * PSEUDO CODE
 * Pivot Helper:
 * Receives an array. 
 * Designate an element as the pivot point
 * Rearrange the elements so that all elements < pivot are moved to the left
 * and all elements > pivot are to its right
 * --
 * The helper should do it in place, do not create a new array
 * When complete, the helper return the index of the pivot
 * --
 * 
 */

const myLib =  require('./myLib');

function pivotHelper(arr, start=0, end=arr.length-1){
  let pivot = arr[start];
  let swapIndex = start;
  
  for(var i = start +1; i < arr.length; i++) {
      if(pivot > arr[i]){
        swapIndex++;
      myLib.swap(arr, swapIndex, i);
    }
  }
  
  myLib.swap(arr, start, swapIndex);
  
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length -1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    quickSort(arr,left, pivotIndex-1);
    // right
    quickSort(arr, pivotIndex+1, right);
  }
  
  return arr;
}


var a = myLib.randomArray();
// var a = [9,4,5,8,2];
console.log(a);
quickSort(a);
console.log(a);
