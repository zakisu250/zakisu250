function commonCharacterCount(s1: string, s2: string): number {
  let count = 0;
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');

  s1Arr.forEach((char) => {
    if (s2Arr.includes(char)) {
      count++;
      s2Arr.splice(s2Arr.indexOf(char), 1);
    }
  });

  return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
