function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  const proMap: { [key: string]: string[] } = {};
  const result: string[][][] = [];
  for (let i = 0; i < pros.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (proMap[preferences[i][j]]) {
        proMap[preferences[i][j]].push(pros[i]);
      } else {
        proMap[preferences[i][j]] = [pros[i]];
      }
    }
  }
  for (let key in proMap) {
    result.push([[key], proMap[key]]);
  }
  return result;
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning'],
    ]
  )
);
