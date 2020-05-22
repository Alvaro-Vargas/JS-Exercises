/**
 * Function must accept a string and return the length of the longest substring 
 * with all distinct characters
 */

 function findLongestSubstring (str) {
  let longest = 0;
  let current = 0;
  let freqObj = {}

  for(let letter of str) {
    if(freqObj[letter]) {
      freqObj = {}
      longest = Math.max(current, longest);
      current = 1; 
      freqObj[letter] = (freqObj[letter] || 0) + 1;
    } else {
      freqObj[letter] = (freqObj[letter] || 0) + 1;
      current++;
    }
    
  }

  console.log(longest);
  return longest;
 }

 // Test Cases
findLongestSubstring(''); 
findLongestSubstring('rithmschool'); 
findLongestSubstring('thisisawesome');
findLongestSubstring('thecatinthehat')
findLongestSubstring('bbbbbbbbb');