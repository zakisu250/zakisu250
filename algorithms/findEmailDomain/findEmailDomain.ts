function findEmailDomain(address: string): string {
  const addressParts = address.split('@');
  return addressParts[addressParts.length - 1];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
