var Stack = function () {
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var extend = function (someInstance, methods) {
  for (var key in methods) {
    someInstance[key] = methods[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter += 1;

};

stackMethods.pop = function () {
  if (this.counter) {
    this.counter -= 1;
  }
  return this.storage[this.counter];
};

stackMethods.size = function () {
  return this.counter;
};