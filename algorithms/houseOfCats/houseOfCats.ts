function houseOfCats(legs: number): number[] {
  const people = [];

  for (let i = 0; i <= legs / 2; i++) {
    if ((legs - 2 * i) % 4 === 0) {
      people.push((legs - 2 * i) / 4);
    }
  }

  return people;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
