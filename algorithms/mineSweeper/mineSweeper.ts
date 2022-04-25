function minesweeper(matrix: boolean[][]): number[][] {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      if (i > 0) {
        if (matrix[i - 1][j]) count++;
        if (matrix[i - 1][j - 1]) count++;
        if (matrix[i - 1][j + 1]) count++;
      }
      if (matrix[i][j - 1]) count++;
      if (matrix[i][j + 1]) count++;
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) count++;
        if (matrix[i + 1][j - 1]) count++;
        if (matrix[i + 1][j + 1]) count++;
      }
      (result as number[][])[i].push(count);
    }
  }
  return result;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
