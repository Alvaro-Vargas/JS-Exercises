/**
 * sameFrequency()
 * Given 2 positive integers, find out if the 2 numbers have the same frequency of digits;
 */


 function sameFrequency(numA, numB){
  let strA = numA.toString();
  let strB = numB.toString();

  if(strA.length !== strB.length) {
    console.log('The number do not have the same amount of digits');
    return false;
  }

  let objA = {}
  let objB = {}
  
  for(let i = 0; i < strA.length; i++){
    objA[strA[i]] = (objA[strA[i]] || 0) + 1;
  }
  
  for(let i = 0; i < strB.length; i++){
    objB[strB[i]] = (objB[strB[i]] || 0) + 1;
  }

  for(let key in objA) {
    if(!(objB[key])){
      console.log('There a not corresponding digits between the numbers');
      return false
    }
    if(objA[key] !== objB[key]) {
      console.log('The frequency do not match');
      return false;
    }
  }

  console.log('The numbers have the same frequency of digits');
  return true;
  
}

 // Test Cases

 sameFrequency(182, 281); // true
 sameFrequency(34, 14); // false
 sameFrequency(3589578, 5879385); // true
 sameFrequency(22, 222); // false