// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, head)
    let [leftN, current] = [dummy, head]
    
    for(let i=0;i<left-1;i++){
      [leftN, current] = [current, current.next]
    }

    let prev = null
    for(let i=0;i<(right-left)+1;i++){
      const prevNext = current.next
      current.next = prev
      prev = current
      current = prevNext
    }

    leftN.next.next = current
    leftN.next = prev

    return dummy.next
};

// TC1
let head
let arr = [5,4,3,2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(reverseBetween(head, 2, 4))  // 1,4,3,2,5

// TC2
head = null
arr = [5]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
// console.log(reverseBetween(head, 1, 1))  // 5
