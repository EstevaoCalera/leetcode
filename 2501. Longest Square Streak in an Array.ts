export function longestSquareStreak(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);
  let maxStreak: number[] = [];
  for (const num of nums) {
    let streak = [num];
    let nextSquareRoot = findSquareRoot(num, nums);

    while (nextSquareRoot) {
      streak.push(nextSquareRoot);
      nextSquareRoot = findSquareRoot(nextSquareRoot, nums);
    }

    if (streak.length > maxStreak?.length) {
      maxStreak = streak;
    }
  }
  return maxStreak.length > 1 ? maxStreak.length : -1;
};

function findSquareRoot(num: number, nums: number[]): number | undefined {
  const sqrtNum = Math.sqrt(num)
  if (!isInt(sqrtNum)) {
    return;
  }
  return nums.find(n => n === sqrtNum);
}

function isInt(x: number): boolean {
  return (x | 0) === x;
}