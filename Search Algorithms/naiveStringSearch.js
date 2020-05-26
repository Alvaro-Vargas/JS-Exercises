/**
 * receive a long string and a pattern
 * Loop through the long string 
 * Loop over the short string
 * If the char dont match, break out of the inner loop
 * If they match, keep going
 * If you complete the inner loop and find a match, increment the count of matches
 * return the count
 */

 function naiveStringSearch(str, pattern){
  let count = 0;

  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < pattern.length; j++){
      if(str[i] === pattern[j]){
        j === pattern.length - 1 ? count++ : i++;
        continue;
      } else {
        break;
      }
    }
  }

  return count;
 }

 let long_string = 'TestxTestTest Test';
 let pattern = 'Test';

console.log(naiveStringSearch(long_string, pattern));
 

 