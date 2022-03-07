function integerToStringOfFixedWidth(number: number, width: number): string {
  const numberString = number.toString();
  if (numberString.length === width) {
    return numberString;
  } else if (numberString.length < width) {
    return '0'.repeat(width - numberString.length) + numberString;
  } else {
    return numberString.slice(numberString.length - width);
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
