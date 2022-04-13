function bishopAndPawn(bishop: string, pawn: string): boolean {
  const board = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const bishopX = board.indexOf(bishop[0]);
  const bishopY = parseInt(bishop[1]);
  const pawnX = board.indexOf(pawn[0]);
  const pawnY = parseInt(pawn[1]);

  if (Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY)) {
    return true;
  }

  return false;
}

console.log(bishopAndPawn('a1', 'c3'));
