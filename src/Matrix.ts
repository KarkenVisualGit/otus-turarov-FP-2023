export function spiral(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];

  const result: number[] = [];
  let startRow = 0;
    let endRow = matrix.length - 1;
  let startCol = 0;
    let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }

    if (startRow < endRow) {
      for (let col = endCol - 1; col >= startCol; col--) {
        result.push(matrix[endRow][col]);
      }
    }

    if (startCol < endCol) {
      for (let row = endRow - 1; row > startRow; row--) {
        result.push(matrix[row][startCol]);
      }
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

const result = spiral([
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
]);

console.log(result); // [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]
