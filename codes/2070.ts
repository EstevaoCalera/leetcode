function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort((a, b) => a[0] - b[0]);

  function removeOverpriced(prev: number[][], curr: number[]): number[][] {
    if (curr[1] > prev[prev.length - 1][1]) prev.push(curr);
    return prev;
  }
  const filteredItems = items.reduce(removeOverpriced, [items[0]]);

  function binarySearch(target: number): number {
    let left = 0, right = filteredItems.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (filteredItems[mid][0] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right >= 0 ? filteredItems[right][1] : 0;
  }
  return queries.map(binarySearch);
};

const items = [[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]];
const queries = [1, 2, 3, 4, 5, 6];

console.log(maximumBeauty(items, queries));