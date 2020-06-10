import { swap } from "../tools/tools";

/*
    Outer loop tracks the unsorted part of an array;

        Inner loop goes through the unsorted part of an array
        and compares current smallest value with each element in the array:
            if current smallest value is > current element of the array
                assign current element's index to be the smallest value;

    Once the smallest element index is found
    swap it with the first element of the unsorted part of the array;
*/

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
