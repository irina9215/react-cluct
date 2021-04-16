/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var build = function(inorder, postorder) {
    if(inorder.length === 0 || postorder.length === 0) {
        return null
    }
    let root =  new TreeNode(postorder[postorder.length - 1]);
    let mid = inorder.indexOf(postorder[postorder.length -1]);
    // console.log(inorder.slice(0, mid), postorder.slice(0, postorder.length - 1))
    //  console.log(inorder.slice(mid + 1),  postorder.slice(0, postorder.length - 1));
    //  let right =  
    if (mid === -1) {
        return null
    }
    root.left = build(inorder.slice(0, mid), postorder.slice(0, postorder.length - 1));
    root.right = build(inorder.slice(mid + 1),  postorder.slice(0, postorder.length - 1));
    return root
};
var buildTree = function(inorder, postorder) {
    return build(inorder, postorder)
}