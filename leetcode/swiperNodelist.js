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
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element != val) {
            nums[l] = nums[index] 
            l++
        }
    }
    return l
};
