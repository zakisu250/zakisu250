function convertString(s: string, t: string): boolean {
  let tIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]) {
      tIndex++;
    }
    if (tIndex === t.length) {
      return true;
    }
  }
  return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
