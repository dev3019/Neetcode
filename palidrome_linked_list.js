//  Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // time: O(n), space: O(n)
  // let listArr = []
  // let current = head
  // while(current){
  //     listArr.push(current.val)
  //     current = current.next
  // }
  // [l,r] = [0,listArr.length-1]
  // while(l<r){
  //     if(listArr[l]!==listArr[r]) return false
  //     l++
  //     r--
  // }
  // return true

  // time: O(n), space: O(1)
  let [slow, fast] = [head, head]
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  let prev = null
  while(slow){
    const prevNext = slow.next
    slow.next = prev
    prev = slow
    slow = prevNext
  }
  let temp = head
  while(prev){
    if(prev.val!==temp.val) return false
    prev = prev.next
    temp = temp.next
  }
  return true
};

// TC1
let head
let arr = [1,2,2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(isPalindrome(head))  // true

// TC2
head= null
arr = [2,1]
for(let i=0; i<arr.length;i++){
  head = new ListNode(arr[i], head)
}
console.log(isPalindrome(head))  // false