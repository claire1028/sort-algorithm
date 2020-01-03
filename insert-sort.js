const insertSort = (arr) => {
  if(!arr || arr.length <= 0) {
    return;
  }
  const newArr = arr.slice();
  const len = newArr.length;
  for(let i = 0; i < len; i ++) {
    let key = i;
    while(key > -1) {
      if(newArr[key] > newArr[key + 1]) {
        const temp = newArr[key];
        newArr[key] = newArr[key + 1];
        newArr[key + 1] = temp;
      }
      key--;
    }
  }
  return newArr;
}

export default insertSort;