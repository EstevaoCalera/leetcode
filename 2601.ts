function primeSubOperation(nums: number[]): boolean {
  if (isStrictelySorted(nums)) {
    return true;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      continue;
    }
    const num = primeSub(nums[i], nums[i + 1]);
    console.log('num', num);
    if (!num) {
      return false;
    }
    nums[i] = num;
  }

  return isStrictelySorted(nums);
};

function isStrictelySorted(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] <= nums[i]) {
      return false;
    }
  }
  return true;
}

// 9, 6
function primeSub(num: number, max: number): number | null {
  for (let i = 2; num - i > 0; i++) {
    console.log('prime', i);
    if (!isPrime(i)) {
      continue;
    }
    if (num - i < max) {
      return num - i;
    }
  }
  return null;
}

function isPrime(num: number): boolean {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}