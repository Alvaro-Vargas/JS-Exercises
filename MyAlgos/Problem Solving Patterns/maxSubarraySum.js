/**
 * Write a functions which accepts an array of integers and a number (n).
 * The function should calculate the maximum sum of n consecutive elements in the array
 */

// Naive Approach
 function naiveMaxSubarraySum(arr, subSet) {
  if(subSet > arr.length) {
    console.log('Subset too big for the array');
    return null;
  }

  let maxSubSum = -Infinity; // This allows us to work in case the array is only negative numbers
  
  for(let i = 0; i < (arr.length - subSet) + 1 ; i++) {
    let currentSum = 0;
    for(j = 0; j < subSet; j++) {
      currentSum += arr[i+j]
    }
    
    if(currentSum > maxSubSum) {
      maxSubSum = currentSum;
    }
  }
  console.log(maxSubSum);
  return maxSubSum;
}

// SLIDING WINDOW TECHNIQUE

function slidingMaxSubarraySum(arr, subSet){
  //edge case
  if(arr.length < subSet) {
    console.log('SubSet is > than the arr');
    return null;
  }
  let temp = 0;
  let maxSum = 0;
  //first sum == create the window
  for(let i = 0; i < subSet; i++){
    maxSum += arr[i];
  }

  temp = maxSum;
  // slide the window  
  for(let i = subSet; i < arr.length; i++){
    temp = temp - arr[i-subSet] + arr[i];
    if(temp > maxSum) {
      maxSum =  temp;
    }
  }

  console.log(maxSum);
  return maxSum;
  
}

// Test Cases

slidingMaxSubarraySum([1,2,3,4],3); 
slidingMaxSubarraySum([1,2,3,4,1,1,12],3); 
slidingMaxSubarraySum([1,1,1,2,2,2],3); 

