function checkPalindrome(inputString: string): boolean {
  const reversedWord = inputString.split('').reverse().join('');

  return inputString === reversedWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
