function allLongestStrings(inputArray: string[]): string[] {
  let longestStringLength = 0;
  const longestWords: string[] = [];

  inputArray.forEach((str) => {
    longestStringLength =
      longestStringLength < str.length ? str.length : longestStringLength;
  });

  inputArray.forEach((str) => {
    if (str.length === longestStringLength) {
      longestWords.push(str);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
