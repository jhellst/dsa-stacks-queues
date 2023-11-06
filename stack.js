/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  // [1,2] 3 -> [1,2,3]

  push(val) {
    if (this.top) {
      let newNode = new Node(val);
      let prevTop = this.top;
      this.top = newNode;
      this.top.next = prevTop;
    } else {
      this.top = new Node(val);
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  // [1,2,3] -> [1,2] 3

  pop() {
    if (this.size === 0) throw new Error();

    let removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return removedNode.val;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if (this.size === 0) throw new Error();
    return this.top.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size === 0);
  }
}

module.exports = Stack;
