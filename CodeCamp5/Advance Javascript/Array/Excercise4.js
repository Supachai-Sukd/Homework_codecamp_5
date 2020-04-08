function getMaxSubSum(arr) {
    let maxSum = 0;
    let maxValue = 0;
    for (let value of arr) {
      maxSum += value;
      maxValue = Math.max(maxValue, maxSum);
      if (maxSum < 0) maxSum = 0;
    }
    return maxValue;
  }

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));