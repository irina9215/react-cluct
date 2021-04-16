/** 25. K 个一组翻转链表
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

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
var reverse = function(a, b) {
    let pre = new ListNode(0);
    let cur = new ListNode(0);
    let next = new ListNode(0);
    pre = null;
    cur = a;
    next = a;
    while(cur != b) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre
}
var reverseKGroup = function(head, k) {
    if(head === null){
        return null
    }
    let a = new ListNode(0);
    let b = new ListNode(0);
    a = head;
    b = head;
    for(let i = 0; i < k; i++) {
        if(b === null) {
            return head
        }
        b = b.next;
    }
    let newHead = new ListNode(0);
    newHead = reverse(a, b)
    a.next = reverseKGroup(b, k)
    return newHead
};
