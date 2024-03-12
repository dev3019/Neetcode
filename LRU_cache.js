class ListNode {
  constructor(key, val) {
    this.key = (key === undefined ? 0 : key);
    this.val = (val === undefined ? 0 : val);
    [this.prev, this.next] = [null, null]
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map()
    // left=LRU, right=most-recent
    [this.left, this.right] = [new ListNode(), new ListNode()]
    [this.left.next, this.right.prev] = [this.right, this.left]
  }
  
  // remove from left
  remove(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // insert to right
  insert(node){
    node.prev = this.right.prev;
    node.next = this.right;
    this.right.prev.next = node;
    this.right.prev = node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.map.has(key)){
      this.remove(this.map.get(key))
      this.insert(this.map.get(key))
      return this.map.get(key).val
    }
    return -1;
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if(this.map.has(key)) this.remove(this.map.get(key))
    this.map.set(key, new ListNode(key, value))
    this.insert(this.map.get(key))
    if(this.map.size>this.cap){
      const lru = this.left.next
      this.remove(lru)
      this.map.delete(lru.key)
    }
  }
}



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */