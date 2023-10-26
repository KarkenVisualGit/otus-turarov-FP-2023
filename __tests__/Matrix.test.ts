import { spiral } from "../src/Matrix";

describe("spiral", () => {
  it("should handle an empty matrix", () => {
    expect(spiral([])).toEqual([]);
  });

  it("should handle a matrix with one element", () => {
    expect(spiral([[5]])).toEqual([5]);
  });

  it("should handle a rectangular matrix", () => {
    const matrix = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ];
    const expected = [
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ];
    expect(spiral(matrix)).toEqual(expected);
  });

  it("should handle a square matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(spiral(matrix)).toEqual(expected);
  });

  it("should handle a matrix with more rows than columns", () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const expected = [1, 2, 4, 6, 5, 3];
    expect(spiral(matrix)).toEqual(expected);
  });

  it("should handle a matrix with more columns than rows", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    const expected = [1, 2, 3, 4, 8, 7, 6, 5];
    expect(spiral(matrix)).toEqual(expected);
  });
});
