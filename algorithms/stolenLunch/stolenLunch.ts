function stolenLunch(note: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let decoded = '';
  for (let i = 0; i < note.length; i++) {
    if (alphabet.indexOf(note[i]) !== -1) {
      decoded += alphabet.indexOf(note[i]);
    } else if (note[i] >= '0' && note[i] <= '9') {
      decoded += alphabet[parseInt(note[i])];
    } else {
      decoded += note[i];
    }
  }
  return decoded;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
