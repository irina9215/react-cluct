/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var build = function(preorder, inorder, order) {
    // console.log(preorder, inorder, order)
    if(preorder.length === 0 || inorder.length === 0) {
        return null
    }
     let root = new TreeNode(preorder[0])
     const mid = inorder.indexOf(preorder[0]);
    // console.log(inorder.slice(0, inorder.indexOf(preorder[0])))
    // console.log(inorder.slice(inorder.indexOf(preorder[0]) + 1))
    root.left = build(preorder.slice(1, mid + 1), inorder.slice(0, mid), 'left')
    root.right = build(preorder.slice(mid + 1), inorder.slice(mid + 1), 'right')
    return root
};
var buildTree = function(preorder, inorder) {
    return build(preorder, inorder)
}