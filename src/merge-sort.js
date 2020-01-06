const merge = (arr, mid, first, end) => {
  const leftArr = arr.slice(first, mid + 1);
  const rightArr = arr.slice(mid + 1, end + 1);
  leftArr[mid + 1 - first] = Number.POSITIVE_INFINITY;
  rightArr[end - mid] = Number.POSITIVE_INFINITY;

  let i = 0;
  let j = 0;
  for(let k = first; k < (end + 1); k++) {
    if(leftArr[i] < rightArr[j] ) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
  }
}

const mergeSort = (arr, first, end) => {
  if(!arr || arr.length <= 0) {
    return;
  }
  if(first < end) {
    const mid = Math.floor((first + end) / 2);
    mergeSort(arr, first, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, mid, first, end);
  }
};

export default mergeSort;