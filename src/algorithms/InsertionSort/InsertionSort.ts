export default function insertionSort(arr: number[]): number[] {
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    if (el < newArr[0]) {
      newArr = [el, ...newArr];
    } else if (el > newArr[newArr.length - 1]) {
      newArr = [...newArr, el];
    } else {
      for (let j = 0; j < newArr.length - 1; j++) {
        if (el > newArr[j] && el < newArr[j + 1]) {
          newArr = [...newArr.slice(0, j + 1), el, ...newArr.slice(j + 1)];
        }
      }
    }
  }

  return newArr;
}
