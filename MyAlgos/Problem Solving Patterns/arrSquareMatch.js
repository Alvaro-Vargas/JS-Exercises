/**
 * Write a function named: SAME, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding
 * value squared in the second array.
 * The frequency of values should be the same.
 */

function same(arr, sqrArr) {
  // compare is the arr have the same length. (if they are not is impossible to meet the question criteria)
  if(arr.length !== sqrArr.length){
    console.log('FALSE!');
    console.log('Arrays do have the same length');
    return false;
  } 
  // Turn Each element into and Obj
  let obj = {};
  let sqrObj = {};
  for(let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for(let val of sqrArr){
    sqrObj[val] = (sqrObj[val] || 0) + 1;
  }  

  // Compare Keys to see if there is a match
  for(let key in obj) {
    if(!(sqrObj[key**2])){
      console.log('FALSE!');
      console.log('No key sqr in the second arr');
      return false;
    }
    // Compare number of entries
    if(obj[key] !== sqrObj[key**2]){
      console.log('FALSE!');
      console.log('Frequencies do not match!');
      console.log('Arr1 has key: ' + key + ' with a frequency of: ' + obj[key]);
      console.log('But sqrArr has key: ' + (key**2) + ' with frequency of: ' + sqrObj[key**2] + ' times');
      return false;
    }
  }
  console.log('TRUE');
  console.log('Congratulations, the arrays are a SQUARE MATCH');
  return true;
}


// Test Cases:
same([1,2,3], [4,1,9]); // true
same([1,2,3], [1,9]); // false
same([1,2,1], [4,4,1]); //false
