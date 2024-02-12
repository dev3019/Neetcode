var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let node = {};
  if (this.stack.length < 1) {
    node = {
      val,
      minVal: val,
    };
  } else {
    const minVal = Math.min(val, this.stack[this.stack.length - 1].minVal);
    node = {
      val,
      minVal,
    };
  }
  this.stack.push(node);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const main = function () {
  const minStack = new MinStack();
  minStack.push(2);
  minStack.push(0);
  minStack.push(3);
  minStack.push(0);
  console.log(minStack.getMin(), 0);
  minStack.pop();
  console.log(minStack.top(), 3);
  minStack.pop();
  console.log(minStack.top(), 0);
  minStack.pop();
  console.log(minStack.getMin(), 2);
  minStack.pop();
  console.log(minStack.stack);
};

main();
