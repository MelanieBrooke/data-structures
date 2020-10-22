var Queue = function () {
  var someInstance = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};
  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function (someInstance, methods) {
  for (var key in methods) {
    someInstance[key] = methods[key];
  }
};

var queueMethods = {};


queueMethods.enqueue = function (data) {
  this.storage[this.tail] = data;
  this.tail += 1;
};

queueMethods.dequeue = function () {
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