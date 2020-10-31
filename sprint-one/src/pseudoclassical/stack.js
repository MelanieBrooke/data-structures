var Stack = function() {
  this.counter = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.pop = function() {
  if (this.counter) {
    this.counter -= 1;
  }
  return this.storage[this.counter];
};


Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;

};

Stack.prototype.size = function() {
  return this.counter;

};
var someInstance = new Stack();