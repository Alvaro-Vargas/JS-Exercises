/**
 * accepts a 'variable number of arguments' and check if there are duplicates.
 */

function areThereDuplicates () {
  let values = {}
  for(let key in arguments) {
    values[arguments[key]] = (values[arguments[key]] || 0 ) + 1
    if(values[arguments[key]] > 1) {
      console.log('FALSE- There are duplicated values in the parameters');
      return false;
    }
  }

  console.log('TRUE - There are no duplicated values');
  return true;
}

areThereDuplicates('a', 'b', 'c');