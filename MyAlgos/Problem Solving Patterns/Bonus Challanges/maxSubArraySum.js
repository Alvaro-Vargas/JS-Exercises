/**
 * Given an array of integers and a number
 * Write a function which finds the maximum subArray with the length of the number
 * The sub array must be of consecutive elements.
 * The arrays might not be sorted
 */

 function maxSubArraySum(arr, subArr) {

  if(subArr > arr.length){
    console.log('The length of the subArray is greater than the length of the Arr');
    return null;
  }

  let currentSum = 0;
  let maxSum = 0;
  //Sum the length of the subarray
  for(let i = 0; i <= subArr - 1; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  
  for(let i = subArr; i < arr.length; i++) {
    currentSum = (currentSum - arr[i - subArr]) + arr[i];
    if(currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  
  console.log(maxSum);
  return maxSum;

 }

 // test
 maxSubArraySum([100, 200, 300, 400], 2); // 700
 maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0,20], 4); // 39
 maxSubArraySum([-3, 4, 0, -2, 6, -1], 2); // 5
 maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2); // 5
 maxSubArraySum([2,3], 3); // null