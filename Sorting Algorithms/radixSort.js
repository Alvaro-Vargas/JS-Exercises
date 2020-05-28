/**
 * getDigit can use the following approaches:
 * - Turn the INT to a String and get the index
 * - Each position represents a power of 10
 * i.e: 1 - 10 - 100 - 1000 - 10000
*/

/**
 * HELPERS
 */

 // Get the digit into a given positiobn
// function getDigitString(num, place) {
//   let strNum = num.toString();
//   let strPlace = strNum.length - place;

//   return Number(strNum[strPlace]);
// }

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}

// console.log(getDigitString(1234, 12)); // Nan
// console.log(getDigit(1234, 12)); // 0

// Find the amount of digits in a number
function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Find the largest number on a list (digits wise)
function mostDigits(arr) {
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++) {
     let current = digitCount(arr[i]);
     // Also can use Math.max();
     if(current > maxDigits) {
       maxDigits = current;
     }
  }

  return maxDigits;
}


function radixSort(arr){
  let maxDigits = mostDigits(arr);

  for(let i = 0; i <= maxDigits; i++ ){
    let arrays = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    }
    for(let j = 0; j < arr.length; j++) {
      arrays[
        getDigit(arr[j], i)] = arrays[getDigit(arr[j], i)].concat(arr[j]); 
    }
    arr = [];

    for(let key in arrays) {
      arr = arr.concat(arrays[key]);
    }
  }

  return arr;
}

let a = [123,12,1111,1,33,2,12334455];

let b = radixSort(a);

console.log(b);


