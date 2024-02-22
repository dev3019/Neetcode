//  Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode()
  let current = dummy
  while(list1&&list2){
    if(list1.val<list2.val){
      current.next = list1
      list1 = list1.next
    }else{
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }
  current.next = list1||list2
  return dummy.next
};

// TC1
let list1, list2
let arr = [4,2,1]
for(let i=0; i<arr.length;i++){
  list1 = new ListNode(arr[i], list1)
}
arr = [4,3,1]
for(let i=0; i<arr.length;i++){
  list2 = new ListNode(arr[i], list2)
}
console.log(mergeTwoLists(list1, list2))  // 1->1->2->3->4->4

// TC2
list1= null, list2=null
arr = []
for(let i=0; i<arr.length;i++){
  list1 = new ListNode(arr[i], list1)
}
arr = []
for(let i=0; i<arr.length;i++){
  list2 = new ListNode(arr[i], list2)
}
console.log(mergeTwoLists(list1, list2))  // null

// TC3
list1= null, list2=null
arr = []
for(let i=0; i<arr.length;i++){
  list1 = new ListNode(arr[i], list1)
}
arr = [0]
for(let i=0; i<arr.length;i++){
  list2 = new ListNode(arr[i], list2)
}
console.log(mergeTwoLists(list1, list2))  // 0