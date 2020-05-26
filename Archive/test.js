function addUpto(n) {
  return n * (n+1) / 2;
}

function addUpto2(n){
  let total = 0;
  for(let i = 0; i <= n; i++){
    total +=i;
  }
  return total;
}

console.time('addUpto');
let a = addUpto(1000000000000);
console.timeEnd('addUpto')

console.log(a);

console.time('addUpto2');
let b = addUpto2(1000000000000);
console.timeEnd('addUpto2')

console.log(b);
