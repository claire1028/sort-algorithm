const partition = (arr, first, end) => {
  const flag = arr[end];
  let i = first - 1;

  for(let k = first; k < end; k++) {
    if(arr[k] <= flag) {
      ++i;
      const key = arr[k];
      arr[k] = arr[i];
      arr[i] = key;
    }
  }
  arr[end] = arr[i + 1];
  arr[i + 1] = flag;
  return i + 1;
};

const quickSort = (arr, first, end) => {
  if(first < end) {
    const partIndex = partition(arr, first, end);
    quickSort(arr, first, partIndex - 1);
    quickSort(arr, partIndex + 1, end);
  }
  return arr;
};

export default quickSort;