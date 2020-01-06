const radixSort = (arr, digit) => {
  let mod = 10;
  let divisor = 1;
  let newArr = [];

  for(let i = 0; i < digit; i++, mod *= 10, divisor *= 10) {
    let extraArr = [];
    for(let j = 0; j < arr.length; j++) {
      const index = parseInt(arr[j] % mod / divisor);
      if(!extraArr[index]) {
        extraArr[index] = [];
      }
      extraArr[index].push(arr[j]);
    }
    newArr = [];
    for(let j = 0; j < extraArr.length; j++) {
      if(extraArr[j] && extraArr[j].length > 0) {
        newArr = newArr.concat(extraArr[j]);
      }
    }
    arr = newArr;
  }
  return newArr;
};

export default radixSort;