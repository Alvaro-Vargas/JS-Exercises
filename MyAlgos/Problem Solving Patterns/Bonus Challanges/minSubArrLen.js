/**
 * Two parameter: arr of positive integers and a positive integer;
 * Should return the minimal length of continuous subarray 
 * for which the sum is greater than or equal to the integer passed
 * 
 * If there is none, return 0
 */

 function minSubArrayLen (arr, value) {
  let sum = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  // Th entire array has to be looped
  while (start < arr.length) {
    // Check if the current window adds up to the value
    if(sum < value && end < arr.length) {
      sum += arr[end];
      //Move the end of the window
      end++;
    } else if(sum >= value) {
      minLen = Math.min(minLen, end-start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }
  console.log(minLen);
  
  return minLen === Infinity ? 0 : minLen;
 }

 // Test Cases

 minSubArrayLen([2,3,1,2,4,3], 7); // 2