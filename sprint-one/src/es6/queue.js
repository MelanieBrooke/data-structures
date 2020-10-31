class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail += 1;
  }

  dequeue() {
    if (this.tail === this.head) {
      return null;
    }
    var value = this.storage[this.head];
    delete this.storage[this.head];
    this.head += 1;
    return value;
  }

  size() {
    return this.tail - this.head;
  }
}

var someInstance = new Queue();

