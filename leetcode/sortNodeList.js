/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var sortList = function(head) {
    let slow = head;
    let fast = head.next
    let temp = null
    while(fast.next != null && fast != null) {
        fast = fast.next.next
        slow = slow.next
    }
    let rightHead = slow.next;
    slow.next = null
    let left = sortList(head)
    let right = sortList(rightHead)
    return merge(left, right)
};
var merge = (head1, head2) => {
    let p = null;
    while (head1 != null && head2 != null) {
        if (head1.val < head2.val) {
            p.next = 
        } else {
            
        }
    }
}
