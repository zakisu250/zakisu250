function newNumeralSystem(number: string): string[] {
  const numerals: string[] = [];
  for (let i = 65; i <= number.charCodeAt(0); i++) {
    numerals.push(
      `${String.fromCharCode(i)} + ${String.fromCharCode(number.charCodeAt(0))}`
    );
  }
  return numerals;
}

console.log(newNumeralSystem('G'));
