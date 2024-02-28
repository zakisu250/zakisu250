function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  const stepMap: { [key: string]: number } = {}; // Add index signature to stepMap object
  for (let i = 0; i < systemNames.length; i++) {
    if (stepMap[systemNames[i]] === undefined) {
      stepMap[systemNames[i]] = stepNumbers[i];
    } else {
      if (stepMap[systemNames[i]] >= stepNumbers[i]) {
        return false;
      } else {
        stepMap[systemNames[i]] = stepNumbers[i];
      }
    }
  }
  return true;
}

console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_2', 'dragon', 'stage_1', 'stage_2', 'dragon'],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ['stage_1', 'stage_1', 'stage_2', 'dragon'],
    [2, 1, 12, 111]
  )
);
