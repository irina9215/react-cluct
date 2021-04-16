/**
 * 94. 二叉树的中序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归法
var inorderTraversal = function(root) {
    let result = []
    function inorderTraversal_in(root, result) {
        if(!root) {
            return []
        }
        inorderTraversal_in(root.left, result)
        result.push(root.val)
        inorderTraversal_in(root.right, result)
    }
    inorderTraversal_in(root, result)
    return result
};
// 迭代法 利用栈
var inorderTraversal_iter = function (root) {
    let result = [];
    let stack = [];
    while (root ||  stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result
}
