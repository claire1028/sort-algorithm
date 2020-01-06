export default function shellSort(arr) {
  if(!arr || arr.length <= 0) {
    return;
  }
  const len = arr.length;
  let temp;
  for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for(let j = gap; j < len; j++) {
      temp = arr[j];
      let i = j;
      while(i - gap >= 0 && temp < arr[i - gap]) {
        arr[i] = arr[i - gap];
        i = i - gap;
      }
      arr[i] = temp;
    }
  }
  return arr;
}