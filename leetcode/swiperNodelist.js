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
var swapPairs = function(head) {
    let pointer = new ListNode(0);
    pointer.next = head;
    let temp = pointer;
    while(temp.next != null && temp.next.next != null) {
        let first  = temp.next;
        let second = temp.next.next;
        temp.next = second;
        // console.log(first, second, next)
        first.next = second.next;
        second.next = first
        // first.next = next;
        temp = first;
    }
    
    return pointer.next
};
