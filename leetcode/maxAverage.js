// 给定n个整数，找出平均数最大，且长度为K的连续子数组，并输出改最大平均数


let nums = [1,10,-15,50,3,-8], k=4
// 方法一
var maxAverage = function (nums, k) {
    let _maxAverage = null;
    let currentAvg = null;
    for (let i = 0; i < nums.length - k; i++) {
        let temp = nums.slice(i,i + k)
        currentAvg = temp.reduce((prv, cur) => prv + cur, 0)
        if (currentAvg >= _maxAverage || _maxAverage === null) {
            _maxAverage = currentAvg
        }
    }
    return _maxAverage/k
}

maxAverage([1,10,-15,50,3,-8], 4)
// 方法二， 滑动窗的思想， 减少求和迭代
var maxAverageImprove = function (nums, k) {
    let temp = nums.slice(0,k)
    let currentAvg = temp.reduce((prv, cur) => prv + cur, 0);
    let _maxAverage = currentAvg;

    for (let i = k+1; i < nums.length; i++) {
        currentAvg = currentAvg - nums[i-1] + nums[i+k]
        if (currentAvg >= _maxAverage) {
            _maxAverage = currentAvg
        }
    }
    return _maxAverage/k
}
