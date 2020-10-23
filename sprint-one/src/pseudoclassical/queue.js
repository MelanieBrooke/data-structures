var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};

Queue.prototype.dequeue = function() {
  if (this.tail === this.head) {
    return null;
  }
  var value = this.storage[this.head];
  delete this.storage[this.head];
  this.head += 1;
  return value;

};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

var someInstance = new Queue();

