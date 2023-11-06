/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  // [1, 2] 3 --> [1, 2, 3]
  // [] 1 --> [1]

  enqueue(val) {
    let newNode = new Node(val);

    if(this.first){
      this.last.next = newNode;
      this.last = this.last.next;
    }
    else{
      this.first = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  // [1,2,3] --> 1 [2, 3]

  //[1] -> 1 []

  dequeue() {
    if(this.size === 0){
      throw new Error();
    }

    let removedNode = this.first;

    if(this.first === this.last){
      this.first = this.last = null;
      this.size--;
    }
    else{
      this.first = this.first.next;
      this.size--;
    }

    return removedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw new Error();
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
