export function swap(arr: number[], indexA: number, indexB: number): number[] {
  const newArr = [...arr];
  const tempValue = newArr[indexA];

  newArr[indexA] = newArr[indexB];
  newArr[indexB] = tempValue;

  return newArr;
}
