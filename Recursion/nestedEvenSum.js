/**
 * Recursive function that returns the sum of all eve elements in one object
 * Which mai contain nested objects
 */

 function nestedEvenSum(obj) {
  let sum = 0;

  // Loop through the OBJ and sum the even values
  for(let key in obj) {
    // Check if the type is a object
    if(typeof(obj[key]) === 'object') {
      // Add the values from this obj via the recursive function
      sum += nestedEvenSum(obj[key]);
    }
    if(obj[key] % 2 === 0){
      sum += obj[key];
    }
  }

  return sum;
  
 }

 console.log(nestedEvenSum({
   num1: 1,
   num2: 2,
   num3: 3,
   num3: 4,
   num4: {num: 2, num1: { bb: 2, albert: 4}},
 }));
 