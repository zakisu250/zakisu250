function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += inputArray[i];
  }

  tempSum = maxSum;

  for (let i = k; i < inputArray.length; i++) {
    tempSum = tempSum - inputArray[i - k] + inputArray[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
