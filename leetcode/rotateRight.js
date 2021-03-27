/**
 * 61. 旋转链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || head.next === null || k===0) {
        return head
    }
    let deep = 1;
    let node = head;
    while (node.next != null) {
        node = node.next
        deep++
    }
    const _k = k%deep;
    // 断尾点
    let cut = deep - _k;
    if (cut === deep || _k === 0) {
        return head
    }
    node.next = head
    console.log('cut _k',cut,_k)
    while (cut > 0) {
        node = node.next
        cut--
    }
    let result = node.next;
    node.next = null;
    return result
};
