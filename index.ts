import { longestSquareStreak } from "./2501. Longest Square Streak in an Array";

function main() {
  const array = [2, 4];
  console.log(`Finding the longest square streak for the array ${JSON.stringify(array)}`);
  console.log(longestSquareStreak(array));
}

main()