export function longestSquareStreak(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);
  nums = [...new Set(nums)];
  let maxStreak: number[] = [];
  while (nums.length > maxStreak.length) {
    let streak = [nums[0]];
    let nextSquareRoot = findSquareRoot(nums[0], nums);
    nums.splice(0, 1);

    while (nextSquareRoot) {
      streak.push(nextSquareRoot);
      nums.splice(nums.indexOf(nextSquareRoot), 1);
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