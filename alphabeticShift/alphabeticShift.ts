interface StringObject {
  [key: string]: string;
}

function alphabeticShift(inputString: string): string {
  const alpha: StringObject = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'a',
  };
  let inputShifted = inputString.split('');
  for (let i = 0; i < inputShifted.length; i++) {
    inputShifted[i] = alpha[inputShifted[i]];
  }
  return inputShifted.join('');
}

console.log(alphabeticShift('crazy'));
