import { BubbleSortV1, BubbleSortV2, swap } from "./BubbleSort";

describe("Swap", function () {
  it("should swap values in an array for corresponding indexes", function () {
    const arr = [1, 2];
    const arr2 = [3, 4, 1, 2, 5, 7, 23, 4, 57, 9];
    expect(swap(arr, 0, 1)).toEqual([2, 1]);
    expect(swap(arr2, 4, 6)).toEqual([3, 4, 1, 2, 23, 7, 5, 4, 57, 9]);
  });
});

describe("BubbleSortV1", () => {
  it("should sort an array", function () {
    const arr = [3, 4, 2, 1, 5];
    const result = [1, 2, 3, 4, 5];
    expect(BubbleSortV1(arr)).toEqual(result);
  });

  it("should return the same array if it's already sorted", () => {
    const result = [1, 2, 3, 4, 5];
    expect(BubbleSortV1(result)).toEqual(result);
  });
});

describe("BubbleSortV2", () => {
  it("should sort an array", function () {
    const arr = [3, 4, 2, 1, 5];
    const result = [1, 2, 3, 4, 5];
    expect(BubbleSortV2(arr)).toEqual(result);
  });

  it("should return the same array if it's already sorted", () => {
    const result = [1, 2, 3, 4, 5];
    expect(BubbleSortV2(result)).toEqual(result);
  });
});
