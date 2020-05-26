module.exports = {
  swap: (arr, indx1, indx2) => {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] =  temp;
  },
      
  randomArray: () => {
    let tempArr = [];
    for(let i = 0; i < 20; i++){
      tempArr.push(Math.round(Math.random() * 100));
    }
    return tempArr;
  }
  
}



