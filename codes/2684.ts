// 2684. Maximum Number of Moves in a Grid
function maxMoves(grid: number[][]): number {
  let maxMoves = 0;
  for (let row = 0; row < grid.length; row++) {
    if (maxMoves === grid[0].length) {
      return maxMoves;
    }
    const count = move(grid, grid[0].length, row, 0);
    maxMoves = Math.max(maxMoves, count);
  }
  return maxMoves;
}

function move(grid: number[][], max: number, row: number, col: number) {
  let maxMoves = col;
  for (const dir of [0, 1, -1]) {
    if (maxMoves === max) {
      return maxMoves;
    }
    if (grid[row + dir]?.[col + 1] > grid[row]?.[col]) {
      maxMoves = Math.max(maxMoves, move(grid, max, row + dir, col + 1))
    }
  }
  return maxMoves;
}

// const input = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
// const input = [[3, 2, 4], [2, 1, 9], [1, 1, 7]]
// const input = [[5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
// const input = [[2, 4, 3], [5, 4, 9], [3, 4, 2], [10, 9, 13]]; // 2
const input = [[187, 167, 209, 251, 152, 236, 263, 128, 135], [267, 249, 251, 285, 73, 204, 70, 207, 74], [189, 159, 235, 66, 84, 89, 153, 111, 189], [120, 81, 210, 7, 2, 231, 92, 128, 218], [193, 131, 244, 293, 284, 175, 226, 205, 245]]
console.log(`Max moves: ${maxMoves(input)}`);