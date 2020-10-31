class Stack {

  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  }

  pop() {
    if (this.counter) {
      this.counter -= 1;
    }
    return this.storage[this.counter];
  }

  size() {
    return this.counter;
  }
}

var someInstance = new Stack();
