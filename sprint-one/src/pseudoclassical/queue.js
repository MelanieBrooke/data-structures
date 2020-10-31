var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

var someInstance = new Queue();

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
 }

Queue.prototype.enqueue = function (value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[1] = value;
  } else {
    var lastIndex = Object.keys(this.storage).length - 1;
    var newKey = Number(Object.keys(this.storage)[lastIndex]) + 1;
    this.storage[newKey] = value;
  }
 }

Queue.prototype.dequeue = function () {
  let dequeuedItem = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeuedItem;
 }