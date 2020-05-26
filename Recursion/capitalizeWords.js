/**
 * Give an arr of words, return an array with the capitalized words.
 */


function capitalizeWords (arr) {
  let newArr = [];
  if(arr.length===1){
    newArr.push(arr[0].toUpperCase());
    return newArr;
  }
  
  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
; // ['I', 'AM', 'LEARNING', 'RECURSION']