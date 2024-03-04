// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode()
  let current = dummy
  let carry = false
  while(l1 || l2 || carry){
    const l1Val = l1?l1.val:0
    const l2Val = l2?l2.val:0
    const sum = l1Val+l2Val+(carry?1:0)
    if(sum>9){
      carry = true
    }else{
      carry = false
    }
    current.next = new ListNode(sum%10)
    l1 = l1?l1.next:null
    l2 = l2?l2.next:null
    current = current.next
  }
  return dummy.next
};

// TC1
let list1, list2
let arr = [3,4,2]
for(let i=0; i<arr.length;i++){
  list1 = new ListNode(arr[i], list1)
}
arr = [4,6,5]
for(let i=0; i<arr.length;i++){
  list2 = new ListNode(arr[i], list2)
}
console.log(addTwoNumbers(list1, list2))

// TC2
list1 = null, list2 = null
arr = [9,9,9,9,9,9,9]
for(let i=0; i<arr.length;i++){
  list1 = new ListNode(arr[i], list1)
}
arr = [9,9,9,9]
for(let i=0; i<arr.length;i++){
  list2 = new ListNode(arr[i], list2)
}
console.log(addTwoNumbers(list1, list2))