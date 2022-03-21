function palindromeRearranging(inputString: string): boolean {
  const charCount: { [key: string]: number } = {};
  let oddCount = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (charCount[inputString[i]]) {
      charCount[inputString[i]]++;
    } else {
      charCount[inputString[i]] = 1;
    }
  }
  for (let key in charCount) {
    if (charCount[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= 1;
}

console.log(palindromeRearranging('aabb'));
