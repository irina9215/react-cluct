/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) {
        return
    }
    flatten(root.left);
    flatten(root.right);
    let left = new TreeNode(0);
    let right = new TreeNode(0);
    left = root.left;
    right = root.right;
    root.left = null;
    root.right = left;
    // move the previous sub right tree to current right tree
    let _right_end = new TreeNode(0);
    _right_end = root;
    while (_right_end.right != null) {
        _right_end = _right_end.right;
    }
    _right_end.right = right
};