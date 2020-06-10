import { swap } from "../tools/tools";

export function selectionSort(arr: number[]): number[] {
  let newArr = [...arr];

  for (
    let unsortedArrayPartStartIndex = 0;
    unsortedArrayPartStartIndex < newArr.length;
    unsortedArrayPartStartIndex++
  ) {
    let currentSmallestNumberIndex = unsortedArrayPartStartIndex;

    for (let j = unsortedArrayPartStartIndex + 1; j < newArr.length; j++) {
      if (newArr[currentSmallestNumberIndex] > newArr[j]) {
        currentSmallestNumberIndex = j;
      }
    }

    newArr = swap(
      newArr,
      unsortedArrayPartStartIndex,
      currentSmallestNumberIndex
    );
  }

  return newArr;
}
