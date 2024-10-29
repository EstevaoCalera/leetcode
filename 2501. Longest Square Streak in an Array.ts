export function longestSquareStreak(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let maxStreak: number[] = [];
  for (const num of nums) {
    let streak = [num];
    let nextSquare = findSquare(num, nums);

    while (nextSquare) {
      streak.push(nextSquare);
      nextSquare = findSquare(nextSquare, nums);
    }

    if (streak.length > maxStreak?.length) {
      maxStreak = streak;
    }
  }
  return maxStreak.length > 1 ? maxStreak.length : -1;
};

function findSquare(num: number, nums: number[]) {
  const square = num * num;
  return nums.find(n => n === square);
}
