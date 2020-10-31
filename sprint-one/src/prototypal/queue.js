var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.tail = 0;
  someInstance.head = 0;
  someInstance.storage = {};
  return someInstance;
};


var queueMethods = {};


queueMethods.enqueue = function (value) {
  //add item to end of queue
  this.storage[this.tail] = value;
  this.tail += 1;
};

queueMethods.dequeue = function () {
  //remove an item from queue
  if (this.tail === this.head) {
    return null;
  }
  var data = this.storage[this.head];
  delete this.storage[this.head];
  this.head += 1;
  return data;

};

queueMethods.size = function () {
  return this.tail - this.head;
};