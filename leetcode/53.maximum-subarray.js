/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let currentSum = 0
    for(let num of nums){
        if(currentSum > 0) {
            currentSum += num;
        } else {
            currentSum = num;
        }
        res = Math.max(res, currentSum)
    }
    return res
};
