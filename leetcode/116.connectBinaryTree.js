/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return null
    }
    connectBinaryTree(root.left, root.right)
    return root
};
var connectBinaryTree = function (node1, node2) {
    if (node1 === null || node2 === null) {
        return
    }
    node1.next = node2
    connectBinaryTree(node1.left, node1.right)
    connectBinaryTree(node2.left, node2.right)
    connectBinaryTree(node1.right, node2.left)
}