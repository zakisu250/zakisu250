function longestDigitsPrefix(inputString: string): string {
  let result = '';
  for (let i = 0; i < inputString.length; i++) {
    if (isNaN(parseInt(inputString[i]))) {
      return result;
    }
    result += inputString[i];
  }
  return result;
}

console.log(longestDigitsPrefix('123aa1'));
