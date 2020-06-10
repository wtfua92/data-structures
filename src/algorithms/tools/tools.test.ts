import { swap } from "./tools";

describe("Swap", function () {
  it("should swap values in an array for corresponding indexes", function () {
    const arr = [1, 2];
    const arr2 = [3, 4, 1, 2, 5, 7, 23, 4, 57, 9];
    expect(swap(arr, 0, 1)).toEqual([2, 1]);
    expect(swap(arr2, 4, 6)).toEqual([3, 4, 1, 2, 23, 7, 5, 4, 57, 9]);
  });
});
