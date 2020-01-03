const createMaxHeap = (arr) => {
  const len = arr.length;
  for(let i = Math.floor(len / 2); i > -1; i--) {
    maxPartHeap(arr, i);
  }
};

const maxPartHeap = (arr, index) => {
  const leftNodeIndex = (index + 1) * 2 - 1;
  const rightNodeIndex = (index + 1) * 2;
  let largestIndex = index;
  const size = arr.size;

  if(leftNodeIndex <= size -1 && arr[index] < arr[leftNodeIndex]) {
    largestIndex = leftNodeIndex;
  } 
  if(rightNodeIndex <= size - 1 && arr[largestIndex] < arr[rightNodeIndex]) {
    largestIndex = rightNodeIndex;
  }
  if(largestIndex !== index) {
    const temp = arr[index];
    arr[index] = arr[largestIndex];
    arr[largestIndex] = temp;
    maxPartHeap(arr, largestIndex);
  }
};

const heapSort = (givenArr) => {
  if(!givenArr || givenArr.length <= 0) {
    return;
  }
  const newArr = givenArr.slice();
  
  let len = newArr.size = newArr.length;
  createMaxHeap(newArr); //先将数组建立一个最大堆
  while(len > 0) {
    const max = newArr[0];
    newArr[0] = newArr[len - 1];
    newArr[len - 1] = max;
    newArr.size = newArr.size - 1;
    maxPartHeap(newArr, 0); 
    len--;
  }
  return newArr;
}

export default heapSort;