/**
 * Definition for singly-linked list.
 * 19. 删除链表的倒数第 N 个结点
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * 思路：两个指针初始状态都指向哑结点，指针fast 先走n步，然后指针fast和指针slow同步往前继续遍历链表，直至fast的后续结点为空，此时指针slow到达被删除结点的前置结点。
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy.next;
    let fast = dummy.next;
    while (n) {
        fast = fast.next;
        n--
    }
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next
    }
    if (slow === head ) {
        console.log(slow, fast)
        if(slow.next === null) {
            dummy.next = null
        } else if (fast){
            slow.next = slow.next.next;
        } else {
            dummy.next = slow.next;
        }
        
    } else {
        // console.log(slow, fast)
        slow.next = slow.next.next;
    }
    return dummy.next
};
