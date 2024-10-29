export function longestSquareStreak(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);
  nums = [...new Set(nums)];
  let maxStreak = 0;
  while (nums.length > maxStreak) {
    let streak = 1;
    let nextSquareRoot = findSquareRoot(nums[0], nums);
    nums.splice(0, 1);

    while (nextSquareRoot) {
      streak++;
      nums.splice(nums.indexOf(nextSquareRoot), 1);
      nextSquareRoot = findSquareRoot(nextSquareRoot, nums);
    }

    if (streak > maxStreak) {
      maxStreak = streak;
    }
  }

  return maxStreak > 1 ? maxStreak : -1;
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