// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head)
    let [first, second] = [dummy, dummy]

    for(let i=0;i<=n;i++){
      second = second.next
    }

    while(second){
      first = first.next
      second = second.next
    }

    first.next = first.next.next

    return dummy.next
};

// TC1
let head
let arr = [5,4,3,2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(removeNthFromEnd(head, 2))
// TC2
head=null
arr = [1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(removeNthFromEnd(head, 1))
// TC3
head=null
arr = [2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(removeNthFromEnd(head, 1))