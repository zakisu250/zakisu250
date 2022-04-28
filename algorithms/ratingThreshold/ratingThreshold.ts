function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const result = [];
  for (let i = 0; i < ratings.length; i++) {
    let sum = 0;
    for (let j = 0; j < ratings[i].length; j++) {
      sum += ratings[i][j];
    }
    if (sum / ratings[i].length < threshold) {
      result.push(i);
    }
  }
  return result;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
