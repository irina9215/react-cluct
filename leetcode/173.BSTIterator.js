/**
 * 173.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.arr = [];
    this.index = 0;
    this.inOrderTraversal(root, this.arr)
    
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[this.index++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index < this.arr.length 
};

/**
 * @return {array}
 */
BSTIterator.prototype.inOrderTraversal = function(root, array) {
    if (!root) {
        return
    }
    this.inOrderTraversal(root.left, array);
    array.push(root.val);
    this.inOrderTraversal(root.right, array);

};
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
