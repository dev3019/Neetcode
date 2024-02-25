// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return head;
    
    let [slow, fast] = [head, head]
    while(fast.next && fast.next.next){
      slow = slow.next
      fast = fast.next.next
    }

    let prev=null
    let current = slow.next
    while(current){
      const prevNext = current.next
      current.next = prev
      prev = current
      current = prevNext
    }

    slow.next = null
    let [firstHalf, secondHalf] = [head, prev]
    while(firstHalf && secondHalf){
      const firstNext = firstHalf.next
      const secondNext = secondHalf.next
      firstHalf.next = secondHalf
      secondHalf.next = firstNext
      firstHalf = firstNext
      secondHalf = secondNext
    }
    return head
};

// TC1
let head
let arr = [4,3,2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(reorderList(head))
// TC2
head=null
arr = [5,4,3,2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(reorderList(head))