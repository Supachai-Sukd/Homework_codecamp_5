function getMaxSubSum (arr) {
    let maxSum = 0;
    let maxValue = 0;
    for (let value of arr) {
        maxSum += value
        maxValue = Math.max(maxValue, maxSum);
        maxValue
        if (maxSum < 0 ) maxSum = 0;
    }
    return maxValue;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));