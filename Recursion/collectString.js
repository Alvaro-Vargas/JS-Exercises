/**
 * Accept an OBJ and return an array of its strings
 */

 function collectStrings(obj) {
   let strArr = [];
  // loop through the obj
  for(let key in obj) {
    if(typeof(obj[key]) === 'object' && typeof(obj[key]) !== null) {
      strArr = strArr.concat(collectStrings(obj[key]));
    }
    if(typeof(obj[key]) === 'string'){
      strArr.push(obj[key]);
    }
  }

  return strArr;
  
 }

 const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj));
 // ["foo", "bar", "baz"])