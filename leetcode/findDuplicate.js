/**
 * @param {number[]} nums
 * @return {number}
 */
// O(N) + 0(N)
var findDuplicate = function(nums) {
    let newMap = new Map()
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (!newMap[element]) {
            newMap[element] = 1
        } else {
            return nums
        }
    }
};
// 二分法
