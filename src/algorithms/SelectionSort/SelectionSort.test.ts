import { selectionSort } from "./SelectionSort";

describe("Selection Sort", () => {
  it("should sort an array", function () {
    const arr = [3, 4, 2, 1, 5];
    const result = [1, 2, 3, 4, 5];
    expect(selectionSort(arr)).toEqual(result);
  });

  it("should return the same array if it's already sorted", () => {
    const result = [1, 2, 3, 4, 5];
    expect(selectionSort(result)).toEqual(result);
  });
});
