export function mergeArrays(firstArr: number[], secondArr: number[]): number[] {
  let newArr = [];

  while (firstArr.length && secondArr.length) {
    const firstNum = firstArr[0];
    const secondNum = secondArr[0];

    if (firstNum > secondNum) {
      newArr.push(secondArr.shift());
    } else {
      newArr.push(firstArr.shift());
    }
  }

  if (firstArr.length) {
    newArr = newArr.concat(firstArr);
  }

  if (secondArr.length) {
    newArr = newArr.concat(secondArr);
  }

  return newArr;
}

export function mergeSort(arr: number[]): number[] {
  const mid = Math.round(arr.length / 2);
  if (arr.length === 1) {
    return arr;
  }

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeArrays(left, right);
}
