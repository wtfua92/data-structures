import { swap } from "../tools/tools";

/*
    1. Set swapCounter to be not 0;
    2. While swapCounter is not 0:
        2.1. Set swapCounter to be 0;
        2.2. For each element in array
            2.2.1 Compare each element to the element next to it;
                - If current element > next element
                    Swap these elements;
                    Increase swapCounter by 1;

    On the last iteration, when the array is already sorted,
    the swapCounter will become 0 again, but it will not change,
    so the loop will break and we can be sure that the array is sorted.
 */
export function bubbleSortV1(arr: number[]): number[] {
  let newArr = [...arr];
  let swapCounter = -1;
  while (swapCounter !== 0) {
    swapCounter = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > newArr[i + 1]) {
        newArr = swap(newArr, i, i + 1);
        swapCounter += 1;
      }
    }
  }

  return newArr;
}
//
// export function BubbleSortV2(arr: number[]): number[] {
//   let newArr = [...arr];
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (newArr[j] > newArr[i]) {
//         newArr = swap(newArr, i, j);
//       }
//     }
//   }
//
//   return newArr;
// }
