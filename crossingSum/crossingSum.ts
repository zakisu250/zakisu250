function crossingSum(matrix: number[][], a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][b];
  }
  for (let j = 0; j < matrix[0].length; j++) {
    sum += matrix[a][j];
  }
  return sum - matrix[a][b];
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
