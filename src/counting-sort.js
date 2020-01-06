export default function countingSort(arr) {
  if(!arr || arr.length <= 0) {
    return;
  }
  const maxLen = Math.max.apply(null, arr) + 1;
  const tempArr = new Array(maxLen);
  const sortedArr = [];
  for(let i = 0; i < maxLen; i++) {
    tempArr[i] = 0;
  }
  for(let i = 0; i < arr.length; i++) {
    tempArr[arr[i]]++;
  }
  for(let i = 1; i < maxLen; i++) {
    tempArr[i] = tempArr[i-1] + tempArr[i];
  }
  for(let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    sortedArr[tempArr[cur] - 1] = cur;
    tempArr[cur] -= 1;
  }
  return sortedArr;
}