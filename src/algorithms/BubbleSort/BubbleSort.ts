export function swap(arr: number[], indexA: number, indexB: number): number[] {
  const newArr = [...arr];
  const tempValue = newArr[indexA];

  newArr[indexA] = newArr[indexB];
  newArr[indexB] = tempValue;

  return newArr;
}

export function BubbleSortV1(arr: number[]): number[] {
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
