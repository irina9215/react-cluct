/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

 var build = function (array) {
    // console.log(array)
    if (array.length === 0) {
        return null
    }
    let max = Math.max(...array)
    let root = new TreeNode(max);

    root.left = build(array.slice(0, array.indexOf(max)));
    root.right = build(array.slice(array.indexOf(max) + 1))
    return root
}
var constructMaximumBinaryTree = function(nums) {
    return build(nums)
};
