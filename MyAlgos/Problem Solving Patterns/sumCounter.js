/**
 * You will receive an array: [1,2,3,4]
 * And you have to add 1 to the array.
 * So [1,2,3,4] + 1 = [1,2,3,5];
 * 
 * Just like a counter, board, or clock, the highest value possible in the arr is 9;
 */


function sumCounter (arr){
  //add 1 to the last digit of the array
  let addTo = (arr.length - 1); 
  
  while((arr[addTo] + 1) > 9) {
    arr[addTo] = 0;
    addTo--;
    if(addTo == 0 && (arr[addTo] + 1) > 9) {
      arr[addTo] = 0;
      arr.unshift(1);
      console.log(arr);
      return arr;
    }
  }

  arr[addTo] += 1;
  console.log(arr);
  return arr;
}

sumCounter([3,9,9,9,9]);