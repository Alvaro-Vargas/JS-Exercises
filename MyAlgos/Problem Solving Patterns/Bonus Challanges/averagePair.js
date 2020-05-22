/**
 * Give a sorted array
 * determine if there is a pair of values in the array where the average of the pair
 * equals the target average
 */

 function averagePair(arr, target) {
   let start = 0;
   let end = arr.length - 1;

   while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if(avg === target) {
      console.log(`Arr index: ${start} value: ${arr[start]}`);
      console.log(`Arr index: ${end} value: ${arr[end]}`);
      console.log(`Avg: ${avg}, target: ${target}`);
      console.log('TRUE');
      return true;
    }
    else if (avg > target) {
      end--;
    } else {
      start++;
    }
   }
   console.log(`No combination of values was found to make target: ${target}`);
   console.log('FALSE');
   return false;
 }

 // Test Cases
 averagePair([1,2,3], 2.5); // true
 averagePair([1,3,3,5,6,7,10,12,19], 8); // true
 averagePair([-1, 0, 3,4,5,6], 4.1); // false
 averagePair([], 4); //false