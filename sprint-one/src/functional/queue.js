var Queue = function () {
  //with queues, all elements that were added before have to be removed before the new element can be removed
  //linear data structure
  var someInstance = {};
  var head = 0;
  var tail = 0;
  //var to track head and tail

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[tail] = value;
    tail += 1;

    //the operation of adding an element to the rear of the queue
  };

  someInstance.dequeue = function () {
    if (tail === head) {
      return null;
    }
    var item = storage[head];
    delete storage[head];
    head += 1;
    return item;
    //removing an element from the front
  };

  someInstance.size = function () {
    return tail - head;
  };

  return someInstance;
};
