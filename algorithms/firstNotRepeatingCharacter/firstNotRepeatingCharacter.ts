function firstNotRepeatingCharacter(s: string): string {
  const charCount: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]]) {
      charCount[s[i]]++;
    } else {
      charCount[s[i]] = 1;
    }
  }

  for (let key in charCount) {
    if (charCount[key] === 1) {
      return key;
    }
  }

  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
