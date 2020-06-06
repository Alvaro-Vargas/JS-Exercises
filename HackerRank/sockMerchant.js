function sockMerchant(n, ar) {
  //loop through the array and make it into an obj
  // Check wich keys have value % 2 === 0
  let obj = {}
  for(let value of ar) {
      obj[value] = (obj[value] || 0) + 1;
  }
  let pairs = 0;
  for(let key in obj) {
    pairs += Math.floor(obj[key] / 2);
          
  }
  
  
  return pairs;
  }

var number  = 9;
var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(number, arr));
