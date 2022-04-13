function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    let absoluteDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
