/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result  = new ListNode(0)
    while(l1.next != null && l1.next != null){
        let temp = l1.val + l2.val;
        result.next = new ListNode(temp%10 + carry);
        result = result.next;
        carry = parseInt(temp/10);
        l1 = l1.next;
        l2 = l2.next;
    }
    if(l2.next){
        result.val = l2.val
        result = result.next
        l2 = l2.next
    }
     if(l1.next){
        result.val = l1.val
        result = result.next
        l1 = l1.next
    }
    return result // 未得到有效解
};