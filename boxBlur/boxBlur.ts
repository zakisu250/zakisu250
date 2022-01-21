function boxBlur(image: number[][]): number[][] {
  let result = [];
  for (let i = 0; i < image.length - 2; i++) {
    let line = [];
    for (let j = 0; j < image[i].length - 2; j++) {
      let sum = 0;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          sum += image[x][y];
        }
      }
      line.push(Math.floor(sum / 9));
    }
    result.push(line);
  }
  return result;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
