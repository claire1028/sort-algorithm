import insertSort from './insert-sort';

const bucketSort = (arr, bucketSize) => {
  const len = arr.length;
  const buckets = new Array(len);
  bucketSize = bucketSize || 10;
  let newArr = [];
  const maxVal = Math.max.apply(null, arr);
  const minVal = Math.min.apply(null, arr);
  const count = Math.floor((maxVal - minVal) / bucketSize) + 1;

  for(let i = 0; i < count; i++) {
    buckets[i] = [];
  }

  for(let i = 0; i < len; i++) {
    const index = Math.floor((arr[i] - minVal) / bucketSize);
    buckets[index].push(arr[i])
  }

  for(let i = 0; i < len; i++) {
    if(buckets[i].length > 0) {
      buckets[i] = insertSort(buckets[i]);
    } else {
      break;
    }
  } 

  buckets.forEach(v => {
    newArr = newArr.concat(v);
  });
  
  return newArr;
};

export default bucketSort;