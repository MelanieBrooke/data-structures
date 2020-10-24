class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
   }

  enqueue(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[1] = value;
    } else {
      var lastIndex = Object.keys(this.storage).length - 1;
      var newKey = Number(Object.keys(this.storage)[lastIndex]) + 1;
      this.storage[newKey] = value;
    }
   }

  dequeue() {
    let dequeuedItem = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return dequeuedItem;
   }

}
