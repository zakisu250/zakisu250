function characterParity(symbol: string): string {
  const result = parseInt(symbol);
  if (isNaN(result)) {
    return 'not a digit';
  }
  return result % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
