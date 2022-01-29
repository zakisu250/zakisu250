function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const cell1X = board.indexOf(cell1[0]);
  const cell1Y = parseInt(cell1[1]);
  const cell2X = board.indexOf(cell2[0]);
  const cell2Y = parseInt(cell2[1]);

  if (Math.abs(cell1X - cell2X) % 2 === Math.abs(cell1Y - cell2Y) % 2) {
    return true;
  }

  return false;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
