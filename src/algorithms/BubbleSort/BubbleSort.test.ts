import { bubbleSortV1 } from "./BubbleSort";

describe("BubbleSortV1", () => {
  it("should sort an array", function () {
    const arr = [3, 4, 2, 1, 5];
    const result = [1, 2, 3, 4, 5];
    expect(bubbleSortV1(arr)).toEqual(result);
  });

  it("should return the same array if it's already sorted", () => {
    const result = [1, 2, 3, 4, 5];
    expect(bubbleSortV1(result)).toEqual(result);
  });
});

// describe("BubbleSortV2", () => {
//   it("should sort an array", function () {
//     const arr = [3, 4, 2, 1, 5];
//     const result = [1, 2, 3, 4, 5];
//     expect(BubbleSortV2(arr)).toEqual(result);
//   });
//
//   it("should return the same array if it's already sorted", () => {
//     const result = [1, 2, 3, 4, 5];
//     expect(BubbleSortV2(result)).toEqual(result);
//   });
// });
