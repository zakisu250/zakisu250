function arrayChange(inputArray: number[]): number {
  let count = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      count += inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }
  return count;
}

console.log(arrayChange([1, 2, 1]));
