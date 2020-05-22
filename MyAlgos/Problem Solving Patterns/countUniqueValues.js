/**
 * Implement a function called countUniqueValues
 * Which: accepts a SORTED array, and counts the unique values in the array.
 * There can be negative numbers, but it will always be sorted
 */


function countUniqueValues(arr){
  let uniqueValues = 1;

  if(arr.length === 0 ) {
    console.log('Empty Array');
    return 0;
  }
  
  //compare the values
  for(let i = 1; i < arr.length; i++){
    if(arr[i] !== arr[i-1]){
      uniqueValues += 1;
    }
  }
  console.log(uniqueValues);
  return uniqueValues;
}

// Test Cases
countUniqueValues([]); // 0
countUniqueValues([1,1,1,1,1,2]); //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
countUniqueValues([-2, -1,-1,0,1]) //4
countUniqueValues([1,1,1,1]) // 1