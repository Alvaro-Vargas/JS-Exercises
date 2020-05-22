/** CHECK FOR VALID ANAGRAMS
 * Given two string, write a function to determine if the second string
 * is a word, phrase, or name formed by rearranging the letters of another
 * suche as CINEMA formed from ICECREAM
 */

   /**EDGE CASES: 
   * Not letters?
   * Spaces?
   * Capital letters?
   */

 function validAnagram(str1, str2) {
  // Check if there is a counterpart key(letter) in each OBJ 
  // If the length is not identical, there are more letters in one of the strings
  // Therefore, no a valid anagram
  if(str1.length !== str2.length) {
    console.log('FALSE');
    console.log('The size of the string do not match. Therefore a anagram is not possible');
    return false;
  }

 //What about spaces? You can have an anagram of: 'Al Va' and 'Alva' ??
 // To fix this I could use a combination os String.trim() to remove spaces from start and end
 // Otherwise use .charAt to find spaces in the middle of the string
 // .slice() using the position provided by .charAt to remove it.


  // transform the str into an object
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  let obj1 = {}
  let obj2 = {}
  for(let letter of newStr1){
    obj1[letter] = (obj1[letter] || 0) + 1;
  }
  for(let letter of newStr2){
    obj2[letter] = (obj2[letter] || 0) + 1;
  }
  
  for(let key in obj1){
    // Check if there is a match for every letter
    if(!(obj2[key])){
      console.log('FALSE');
      console.log('There are missing letters in the second string');
      return false;
    }
    // compare the frequency of each letter
    if(obj1[key] !== obj2[key]) {
      console.log('FALSE');
      console.log('The letters do not appear in the same frequency');
      return false;
    }
  }
  
  console.log('TRUE');
  console.log('This is a possible anagram');
  return true;
  
 }

 // Test Cases

 validAnagram('', ''); // true
 validAnagram('aaz', 'zza'); // false
 validAnagram('anagram', 'nagaram'); //true
 validAnagram('rat', 'car'); //false
 validAnagram('qwerty', 'qerwty'); //true