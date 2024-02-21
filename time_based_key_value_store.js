
var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if(!this.map.has(key)) this.map.set(key, [])
  this.map.get(key).push({timestamp, value})
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return ''
    let res = ''
    const arr = this.map.get(key)
    let [left, right]=[0, arr.length-1]
    while(left<=right){
      const mid = parseInt((left+right)/2)
      if(arr[mid].timestamp<=timestamp){
        res = arr[mid].value
        left = mid+1
      }else{
        right = mid-1
      }
    }
    
    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var obj = new TimeMap()
obj.set('foo', 'bar', 1)
// obj.set('foo', 'bar', 4)
// obj.set('foo', 'bar', 6)
// obj.set('foo', 'bar', 7)
console.log(obj.get('foo',1))
console.log(obj.get('foo',3))
obj.set('foo','bar2',4)
console.log(obj.get('foo',4))
console.log(obj.get('foo',5))