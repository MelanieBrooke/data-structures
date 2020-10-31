class Stack {

  constructor() {
    this.storage = {};
  }
}

  size() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    this.storage[Object.keys(this.storage).length] = value;
   }

  pop() {
    let poppedItem = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return poppedItem;
  }

}

