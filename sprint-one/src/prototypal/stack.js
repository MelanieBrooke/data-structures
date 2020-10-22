var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  //add new value to storage, at counter value
  this.storage[this.counter] = value;
  //add one to counter
  this.counter += 1;

};

stackMethods.pop = function() {
  //check if the queue is not empty
  if (this.counter) {
    //popping removes one from counter
    this.counter -= 1;
  }
  //return value of the popped
  return this.storage[this.counter];
};

stackMethods.size = function() {
  return this.counter;
};