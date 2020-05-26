/**
 * A function that receives an object and find the numbers inside
 * converting them to numbers and replacing them with strings
 */

 function stringifyNumbers (obj) {
  // loop through the obj
  for(let key in obj) {
    //if it is an object, call the function again
    if(typeof(obj[key]) === 'object' && typeof(obj[key]) !== null) {
      stringifyNumbers(obj[key]);
    }
    if(typeof(obj[key]) === 'number') {
      obj[key] = obj[key].toString();
    }
  }
  
  return obj; 
 }


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/