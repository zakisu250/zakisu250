function stringsConstruction(a: string, b: string): number {
  const aChars: string[] = a.split('');
  const bChars: string[] = b.split('');
  const aCharCount: { [key: string]: number } = {};
  const bCharCount: { [key: string]: number } = {};
  let minCount: number = Infinity;

  aChars.forEach((char: string) => {
    if (aCharCount[char]) {
      aCharCount[char]++;
    } else {
      aCharCount[char] = 1;
    }
  });

  bChars.forEach((char: string) => {
    if (bCharCount[char]) {
      bCharCount[char]++;
    } else {
      bCharCount[char] = 1;
    }
  });

  Object.keys(aCharCount).forEach((char: string) => {
    if (bCharCount[char]) {
      minCount = Math.min(
        minCount,
        Math.floor(bCharCount[char] / aCharCount[char])
      );
    } else {
      minCount = 0;
    }
  });

  return minCount;
}

console.log(stringsConstruction('abc', 'abccba'));
