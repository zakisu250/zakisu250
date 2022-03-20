function missingLetters(str: string): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const start = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[start + i]) {
      return alphabet[start + i];
    }
  }
  return undefined;
}
console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));
