import { mergeArrays, mergeSort } from "./MergeSort";

describe("Merge Sort", () => {
  it("should sort an array", function () {
    const arr = [4, 3, 2, 1, 5, 6];
    const result = [1, 2, 3, 4, 5, 6];
    expect(mergeSort(arr)).toEqual(result);
  });

  it("should return the same array if it's already sorted", () => {
    const result = [1, 2, 3, 4, 5];
    expect(mergeSort(result)).toEqual(result);
  });
});

describe("mergeArrays", function () {
  it("should merge 2 arrays with 1 element each", () => {
    expect(mergeArrays([2], [1])).toEqual([1, 2]);
  });

  it("should merge 2 arrays with same length", () => {
    expect(mergeArrays([1, 4, 6], [2, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should merge 2 arrays with diff length", () => {
    expect(mergeArrays([1, 4, 6], [2, 3])).toEqual([1, 2, 3, 4, 6]);
    expect(mergeArrays([1, 4], [2, 3, 6])).toEqual([1, 2, 3, 4, 6]);
  });
});
