/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let trackBack = (target, combination, index) => {
        // 终止条件,与传入参数有关
        if (index === candidates.length) {
            return
        }
        // 符合条件
        if (target === 0) {
            result.push(combination)
            return
        }
        // 两种回溯情况
        // 第一种跳过
        trackBack(target, combination, index + 1);
        // 第二种累加
        if (target - candidates[index] >= 0) {
            trackBack(target - candidates[index], [...combination, candidates[index]], index) 
        }
     }
    trackBack(target, [], 0)
    return result
};
