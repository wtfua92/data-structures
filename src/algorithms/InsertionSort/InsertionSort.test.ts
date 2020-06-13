import insertionSort from "./InsertionSort";

describe("Insertion Sort", () => {
  it("should sort an array", function () {
    const arr = [4, 3, 20, 1, 54, 16, 200, 22, 10023, 7, 2342];
    const result = [1, 3, 4, 7, 16, 20, 22, 54, 200, 2342, 10023];
    expect(insertionSort(arr)).toEqual(result);
  });

  it("should return the same array if it's already sorted", () => {
    const result = [1, 2, 3, 4, 5];
    expect(insertionSort(result)).toEqual(result);
  });
});
