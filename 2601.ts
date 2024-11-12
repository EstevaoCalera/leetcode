function primeSubOperation(nums: number[]): boolean {
  const isPrime = (num: number): boolean => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  const biggestPrime = (num: number): number => {
    num--;
    while (!isPrime(num)) {
      if (num < 1) return 0;
      num--;
    }
    return num;
  };

  nums[0] -= biggestPrime(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    nums[i] -= biggestPrime(nums[i] - nums[i - 1]);
    if (nums[i] <= nums[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(primeSubOperation([2, 2]));