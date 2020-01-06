
const selectSort = (arr) => {
  const len = arr.length;
  let minIndex = 0;
  for(let i = 0; i < len - 1 ; i++) {
    minIndex = i;
    for(let j = i + 1; j < len ; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i) {
      const minx = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = minx;
    } 
  }
  return arr;
};

export default selectSort;