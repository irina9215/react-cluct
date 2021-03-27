/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

思路： 异或法
a异或0 为 a
a 异或 a 为 0
a 异或 a 异或 b ---> b   ---->且满足交换律 -----》 重复数字 和一个单独的数字 异或的结果 为最后单独的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single = null;
   for (let index = 0; index < nums.length; index++) {
       const element = nums[index];
       single ^= element
   }
    return single
};
