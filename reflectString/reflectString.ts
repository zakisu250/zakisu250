function reflectString(inputString: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let reflected = '';
  for (let i = 0; i < inputString.length; i++) {
    reflected += alphabet[25 - alphabet.indexOf(inputString[i])];
  }
  return reflected;
}

console.log(reflectString('name'));
