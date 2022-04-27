function pigLatin(str: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonants = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return str.slice(i) + consonants + 'ay';
    } else {
      consonants += str[i];
    }
  }
  return str + 'ay';
}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));
