// 2501. Longest Square Streak in an Array
function longestSquareStreak(nums: number[]): number {
  const set = new Set(nums);
  let maxStreak = 1;
  for (let item of set) {
    let streak = 1;
    let i = item;
    while (set.has(i * i)) {
      i = i * i;
      streak++;
    }
    maxStreak = Math.max(maxStreak, streak);
  }
  return maxStreak > 1 ? maxStreak : -1;
};

console.log(`Longest streak: ${longestSquareStreak([2, 4, 5, 8, 25])}`);