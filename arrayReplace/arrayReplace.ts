function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return inputArray.map((elem) => {
    if (elem === elemToReplace) {
      return substitutionElem;
    }
    return elem;
  });
}

console.log(arrayReplace([1, 2, 1], 1, 3));
